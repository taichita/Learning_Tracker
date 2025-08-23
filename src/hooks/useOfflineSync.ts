'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSupabaseStore } from './useSupabaseStore'

interface QueuedOperation {
  id: string
  type: 'add' | 'update' | 'delete'
  itemId: string
  data?: any
  timestamp: number
  retries: number
}

const MAX_RETRIES = 3
const QUEUE_STORAGE_KEY = 'learning-tracker-sync-queue'

export function useOfflineSync() {
  const { user, syncing } = useSupabaseStore()
  const [isOnline, setIsOnline] = useState(true)
  const [syncQueue, setSyncQueue] = useState<QueuedOperation[]>([])
  const [processing, setProcessing] = useState(false)

  // Load sync queue from localStorage
  const loadSyncQueue = useCallback(() => {
    if (typeof window === 'undefined') return []
    
    try {
      const stored = localStorage.getItem(QUEUE_STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Failed to load sync queue:', error)
      return []
    }
  }, [])

  // Save sync queue to localStorage
  const saveSyncQueue = useCallback((queue: QueuedOperation[]) => {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(queue))
    } catch (error) {
      console.error('Failed to save sync queue:', error)
    }
  }, [])

  // Initialize sync queue from localStorage
  useEffect(() => {
    setSyncQueue(loadSyncQueue())
  }, [loadSyncQueue])

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    setIsOnline(navigator.onLine)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Add operation to sync queue
  const queueOperation = useCallback((operation: Omit<QueuedOperation, 'id' | 'timestamp' | 'retries'>) => {
    const queuedOp: QueuedOperation = {
      ...operation,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      retries: 0
    }

    setSyncQueue(prev => {
      const newQueue = [...prev, queuedOp]
      saveSyncQueue(newQueue)
      return newQueue
    })
  }, [saveSyncQueue])

  // Process sync queue
  const processSyncQueue = useCallback(async () => {
    if (!isOnline || !user || processing || syncing || syncQueue.length === 0) {
      return
    }

    setProcessing(true)
    console.log(`Processing ${syncQueue.length} queued operations...`)

    const updatedQueue: QueuedOperation[] = []

    for (const operation of syncQueue) {
      try {
        // Import supabase here to avoid circular dependencies
        const { supabase } = await import('../../lib/supabase')

        switch (operation.type) {
          case 'add':
            const { error: addError } = await supabase
              .from('content_items')
              .insert(operation.data)
            
            if (addError) throw addError
            console.log('Successfully synced ADD operation for item:', operation.itemId)
            break

          case 'update':
            const { error: updateError } = await supabase
              .from('content_items')
              .update(operation.data)
              .eq('id', operation.itemId)
              .eq('user_id', user.id)
            
            if (updateError) throw updateError
            console.log('Successfully synced UPDATE operation for item:', operation.itemId)
            break

          case 'delete':
            const { error: deleteError } = await supabase
              .from('content_items')
              .delete()
              .eq('id', operation.itemId)
              .eq('user_id', user.id)
            
            if (deleteError) throw deleteError
            console.log('Successfully synced DELETE operation for item:', operation.itemId)
            break
        }
      } catch (error) {
        console.error(`Failed to sync operation ${operation.id}:`, error)
        
        // Retry logic
        if (operation.retries < MAX_RETRIES) {
          updatedQueue.push({
            ...operation,
            retries: operation.retries + 1
          })
        } else {
          console.error(`Max retries reached for operation ${operation.id}, dropping it`)
        }
      }
    }

    setSyncQueue(updatedQueue)
    saveSyncQueue(updatedQueue)
    setProcessing(false)

    if (updatedQueue.length === 0) {
      console.log('All queued operations processed successfully')
    } else {
      console.log(`${updatedQueue.length} operations remain in queue`)
    }
  }, [isOnline, user, processing, syncing, syncQueue, saveSyncQueue])

  // Auto-process queue when conditions are met
  useEffect(() => {
    if (isOnline && user && !processing && !syncing && syncQueue.length > 0) {
      // Delay processing slightly to avoid conflicts with other operations
      const timer = setTimeout(processSyncQueue, 1000)
      return () => clearTimeout(timer)
    }
  }, [isOnline, user, processing, syncing, syncQueue.length, processSyncQueue])

  // Provide offline-aware store operations
  const offlineAddItem = useCallback(async (item: any) => {
    if (isOnline && user) {
      // Online: use normal Supabase store
      const { addItem } = await import('./useSupabaseStore')
      // Note: This would need to be refactored to avoid circular dependency
    } else {
      // Offline: add to local store and queue for sync
      const { useAppStore } = await import('../store/useAppStore')
      useAppStore.getState().addItem(item)
      
      if (user) {
        queueOperation({
          type: 'add',
          itemId: item.id,
          data: item
        })
      }
    }
  }, [isOnline, user, queueOperation])

  const offlineUpdateItem = useCallback(async (id: string, updates: any) => {
    if (isOnline && user) {
      // Online: use normal Supabase store
      // Note: This would need to be refactored to avoid circular dependency
    } else {
      // Offline: update local store and queue for sync
      const { useAppStore } = await import('../store/useAppStore')
      useAppStore.getState().updateItem(id, updates)
      
      if (user) {
        queueOperation({
          type: 'update',
          itemId: id,
          data: updates
        })
      }
    }
  }, [isOnline, user, queueOperation])

  const offlineDeleteItem = useCallback(async (id: string) => {
    if (isOnline && user) {
      // Online: use normal Supabase store
      // Note: This would need to be refactored to avoid circular dependency
    } else {
      // Offline: delete from local store and queue for sync
      const { useAppStore } = await import('../store/useAppStore')
      useAppStore.getState().deleteItem(id)
      
      if (user) {
        queueOperation({
          type: 'delete',
          itemId: id
        })
      }
    }
  }, [isOnline, user, queueOperation])

  return {
    isOnline,
    syncQueue,
    processing,
    queuedOperationsCount: syncQueue.length,
    processSyncQueue,
    // Offline-aware operations (not used yet due to circular dependency)
    offlineAddItem,
    offlineUpdateItem,
    offlineDeleteItem
  }
}