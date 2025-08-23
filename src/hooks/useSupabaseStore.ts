'use client'

import { useAuth } from './useAuth'
import { supabase } from '../../lib/supabase'
import { useAppStore } from '../store/useAppStore'
import { ContentItem, BusinessMemoItem, LifeMemoItem } from '@/types'
import { useEffect, useCallback, useState } from 'react'

export function useSupabaseStore() {
  const { user, loading: authLoading } = useAuth()
  const store = useAppStore()
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Transform local items to Supabase format
  const transformToSupabase = (item: ContentItem) => ({
    id: item.id,
    user_id: user!.id,
    kind: item.kind,
    title: item.title,
    creators: item.authors,
    url: item.url || null,
    date: item.date || null,
    amazon_url: item.amazonUrl || null,
    notebooklm_url: item.notebookLmUrl || null,
    rating: item.rating || null,
    one_liner: item.oneLiner || null,
    business_memo: item.businessMemo || [],
    life_memo: item.lifeMemo || [],
    tags: item.tags,
    status: item.status,
    created_at: item.createdAt,
    updated_at: item.updatedAt
  })

  // Transform Supabase items to local format
  const transformFromSupabase = (item: any): ContentItem => ({
    id: item.id,
    kind: item.kind,
    title: item.title,
    authors: item.creators || [],
    url: item.url,
    date: item.date,
    amazonUrl: item.amazon_url,
    notebookLmUrl: item.notebooklm_url,
    rating: item.rating,
    oneLiner: item.one_liner,
    businessMemo: item.business_memo || [],
    lifeMemo: item.life_memo || [],
    tags: item.tags || [],
    status: item.status,
    createdAt: item.created_at,
    updatedAt: item.updated_at
  })

  // Sync local data to Supabase
  const syncToSupabase = useCallback(async () => {
    if (!user || syncing) return
    
    setSyncing(true)
    setError(null)

    try {
      const localItems = store.items
      
      // Upload all local items
      for (const item of localItems) {
        const supabaseItem = transformToSupabase(item)
        
        const { error: upsertError } = await supabase
          .from('content_items')
          .upsert(supabaseItem, {
            onConflict: 'id'
          })

        if (upsertError) {
          console.error('Error upserting item:', upsertError)
          setError(`Failed to sync item: ${item.title}`)
          return
        }
      }

      console.log(`Successfully synced ${localItems.length} items to Supabase`)
    } catch (err) {
      console.error('Error syncing to Supabase:', err)
      setError('Failed to sync data to cloud')
    } finally {
      setSyncing(false)
    }
  }, [user, store.items, syncing])

  // Load data from Supabase
  const loadFromSupabase = useCallback(async () => {
    if (!user || syncing) return

    setSyncing(true)
    setError(null)

    try {
      const { data: items, error: fetchError } = await supabase
        .from('content_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (fetchError) {
        console.error('Error fetching items:', fetchError)
        setError('Failed to load data from cloud')
        return
      }

      // Transform and merge with local store
      const transformedItems = items.map(transformFromSupabase)
      
      // Clear and replace items using direct assignment
      const { useAppStore } = await import('../store/useAppStore')
      useAppStore.setState((state) => ({
        ...state,
        items: transformedItems
      }))

      console.log(`Successfully loaded ${transformedItems.length} items from Supabase`)
    } catch (err) {
      console.error('Error loading from Supabase:', err)
      setError('Failed to load data from cloud')
    } finally {
      setSyncing(false)
    }
  }, [user, store, syncing])

  // Real-time subscription for changes
  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel('content_items_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'content_items',
          filter: `user_id=eq.${user.id}`
        },
        async (payload) => {
          console.log('Real-time change detected:', payload)
          
          if (payload.eventType === 'INSERT' && payload.new) {
            const newItem = transformFromSupabase(payload.new)
            const currentItems = store.items
            const existingIndex = currentItems.findIndex(item => item.id === newItem.id)
            if (existingIndex === -1) {
              const { useAppStore } = await import('../store/useAppStore')
              useAppStore.setState(state => ({
                ...state,
                items: [...currentItems, newItem]
              }))
            }
          } else if (payload.eventType === 'UPDATE' && payload.new) {
            const updatedItem = transformFromSupabase(payload.new)
            const currentItems = store.items
            const existingIndex = currentItems.findIndex(item => item.id === updatedItem.id)
            if (existingIndex >= 0) {
              const { useAppStore } = await import('../store/useAppStore')
              const newItems = [...currentItems]
              newItems[existingIndex] = updatedItem
              useAppStore.setState(state => ({
                ...state,
                items: newItems
              }))
            }
          } else if (payload.eventType === 'DELETE' && payload.old) {
            const deletedId = payload.old.id
            const currentItems = store.items
            const existingIndex = currentItems.findIndex(item => item.id === deletedId)
            if (existingIndex >= 0) {
              const { useAppStore } = await import('../store/useAppStore')
              const newItems = currentItems.filter(item => item.id !== deletedId)
              useAppStore.setState(state => ({
                ...state,
                items: newItems
              }))
            }
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user, store])

  // Auto-sync when user changes
  useEffect(() => {
    if (user && !authLoading) {
      // Load from Supabase when user logs in
      loadFromSupabase()
    }
  }, [user, authLoading, loadFromSupabase])

  // Override store actions to sync with Supabase
  const addItem = useCallback(async (item: ContentItem) => {
    if (!user) {
      store.addItem(item)
      return
    }

    // Add to local store first
    const newItem = { 
      ...item, 
      id: Math.random().toString(36).substr(2, 9),
      businessMemo: item.businessMemo || [],
      lifeMemo: item.lifeMemo || []
    }
    store.addItem(newItem)

    // Sync to Supabase
    try {
      const supabaseItem = transformToSupabase(newItem)
      const { error } = await supabase
        .from('content_items')
        .insert(supabaseItem)

      if (error) {
        console.error('Error adding item to Supabase:', error)
        setError('Failed to save item to cloud')
      }
    } catch (err) {
      console.error('Error syncing new item:', err)
    }
  }, [user, store])

  const updateItem = useCallback(async (id: string, updates: Partial<ContentItem>) => {
    if (!user) {
      store.updateItem(id, updates)
      return
    }

    // Update local store first
    store.updateItem(id, updates)

    // Sync to Supabase
    try {
      const updatedItem = store.items.find(item => item.id === id)
      if (updatedItem) {
        const supabaseItem = transformToSupabase(updatedItem)
        const { error } = await supabase
          .from('content_items')
          .update(supabaseItem)
          .eq('id', id)
          .eq('user_id', user.id)

        if (error) {
          console.error('Error updating item in Supabase:', error)
          setError('Failed to update item in cloud')
        }
      }
    } catch (err) {
      console.error('Error syncing updated item:', err)
    }
  }, [user, store])

  const deleteItem = useCallback(async (id: string) => {
    if (!user) {
      store.deleteItem(id)
      return
    }

    // Delete from local store first
    store.deleteItem(id)

    // Delete from Supabase
    try {
      const { error } = await supabase
        .from('content_items')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)

      if (error) {
        console.error('Error deleting item from Supabase:', error)
        setError('Failed to delete item from cloud')
      }
    } catch (err) {
      console.error('Error syncing deleted item:', err)
    }
  }, [user, store])

  return {
    // Auth state
    user,
    authLoading,
    
    // Sync state
    syncing,
    error,
    
    // Sync actions
    syncToSupabase,
    loadFromSupabase,
    
    // Enhanced store actions that sync with Supabase
    addItem,
    updateItem,
    deleteItem,
    
    // Pass through other store actions
    updateBusinessMemos: store.updateBusinessMemos,
    updateLifeMemos: store.updateLifeMemos,
    setSelectedItem: store.setSelectedItem,
    setSelectedMonth: store.setSelectedMonth,
    undo: store.undo,
    redo: store.redo,
    canUndo: store.canUndo,
    canRedo: store.canRedo,
    
    // Store state
    items: store.items,
    itemDetails: store.itemDetails,
    selectedItem: store.selectedItem,
    selectedMonth: store.selectedMonth
  }
}