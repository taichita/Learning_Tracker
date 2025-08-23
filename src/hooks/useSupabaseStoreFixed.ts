'use client'

import { useAuth } from './useAuth'
import { supabase } from '../../lib/supabase'
import { useAppStore } from '../store/useAppStore'
import { ContentItem, BusinessMemoItem, LifeMemoItem } from '@/types'
import { useEffect, useCallback, useState, useRef } from 'react'

export function useSupabaseStore() {
  const { user, loading: authLoading } = useAuth()
  const store = useAppStore()
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const loadedRef = useRef(false) // Prevent multiple loads

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

  // Load data from Supabase (only once per user session)
  const loadFromSupabase = useCallback(async () => {
    if (!user || syncing || loadedRef.current) return

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

      // Transform and replace items
      const transformedItems = (items || []).map(transformFromSupabase)
      
      // Use setState to replace items without triggering useCallback dependencies
      store.executeUndoable(
        () => {
          // Clear and set new items
          const currentState = useAppStore.getState()
          useAppStore.setState({
            ...currentState,
            items: transformedItems
          })
        },
        () => {
          // Restore previous state (not critical for initial load)
        }
      )

      loadedRef.current = true // Mark as loaded
      console.log(`Successfully loaded ${transformedItems.length} items from Supabase`)
    } catch (err) {
      console.error('Error loading from Supabase:', err)
      setError('Failed to load data from cloud')
    } finally {
      setSyncing(false)
    }
  }, [user?.id]) // Only depend on user ID

  // Load data when user first logs in
  useEffect(() => {
    if (user && !authLoading && !loadedRef.current) {
      loadFromSupabase()
    }
    
    // Reset loaded flag when user changes
    if (!user) {
      loadedRef.current = false
    }
  }, [user?.id, authLoading])

  // Enhanced store actions that sync with Supabase
  const addItem = useCallback(async (item: ContentItem) => {
    // Always add to local store first for immediate UI update
    store.addItem(item)

    // If user is logged in, sync to Supabase
    if (user) {
      try {
        const supabaseItem = transformToSupabase({ ...item, id: item.id })
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
    }
  }, [user, store])

  const updateItem = useCallback(async (id: string, updates: Partial<ContentItem>) => {
    // Always update local store first
    store.updateItem(id, updates)

    // If user is logged in, sync to Supabase
    if (user) {
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
    }
  }, [user, store])

  const deleteItem = useCallback(async (id: string) => {
    // Always delete from local store first
    store.deleteItem(id)

    // If user is logged in, sync to Supabase
    if (user) {
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
    }
  }, [user, store])

  return {
    // Auth state
    user,
    authLoading,
    
    // Sync state
    syncing,
    error,
    
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