'use client'

import { useState, useEffect } from 'react'
import { MonthSidebar } from '@/components/MonthSidebar'
import { MainTable } from '@/components/MainTable'
import { RightDrawer } from '@/components/RightDrawer'
import { CommandPalette } from '@/components/CommandPalette'
import { NewItemDialog } from '@/components/NewItemDialog'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { useAppStore } from '@/store/useAppStore'
import { AuthButton } from '@/components/AuthButton'
import { useSupabaseStore } from '@/hooks/useSupabaseStoreFixed'

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isNewItemDialogOpen, setIsNewItemDialogOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  
  // Use fixed Supabase store with proper sync
  const {
    user,
    authLoading,
    syncing,
    error: syncError,
    selectedItem,
    selectedMonth,
    setSelectedItem,
    setSelectedMonth,
    undo,
    redo,
    canUndo,
    canRedo
  } = useSupabaseStore()

  // Web Share API: URLパラメータを検出して新規作成ダイアログを開く
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('url') || urlParams.has('title')) {
      setIsNewItemDialogOpen(true)
    }
  }, [])

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onCommandPalette: () => setIsCommandPaletteOpen(true),
    onNewItem: () => setIsNewItemDialogOpen(true),
    onEscape: () => {
      if (selectedItem) {
        setSelectedItem(null)
      } else if (isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false)
      } else if (isNewItemDialogOpen) {
        setIsNewItemDialogOpen(false)
      }
    },
    onUndo: () => {
      if (canUndo()) {
        undo()
      }
    },
    onRedo: () => {
      if (canRedo()) {
        redo()
      }
    }
  })

  return (
    <div className="flex h-screen bg-background">
      {/* Auth Panel */}
      {!user && !authLoading && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <div className="max-w-md mx-auto py-8">
            <AuthButton />
          </div>
        </div>
      )}
      
      {/* Sync Status */}
      {syncError && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded z-40">
          {syncError}
        </div>
      )}
      
      {syncing && (
        <div className="fixed top-4 right-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded z-40 flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          同期中...
        </div>
      )}
      
      {/* Loading overlay */}
      {authLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-600">認証情報を確認中...</p>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform md:relative md:translate-x-0 lg:relative lg:translate-x-0
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:block lg:block
      `}>
        <MonthSidebar 
          selectedMonth={selectedMonth}
          onMonthSelect={setSelectedMonth}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row lg:flex-row min-w-0">
        <MainTable 
          selectedMonth={selectedMonth}
          selectedItem={selectedItem}
          onItemSelect={setSelectedItem}
          onMobileMenuOpen={() => setIsMobileSidebarOpen(true)}
        />
        
        {selectedItem && (
          <div className={`
            fixed inset-0 z-30 md:relative md:inset-auto lg:relative lg:inset-auto
            ${selectedItem ? 'block' : 'hidden'}
          `}>
            <RightDrawer 
              itemId={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          </div>
        )}
      </div>

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNewItem={() => setIsNewItemDialogOpen(true)}
      />

      <NewItemDialog
        isOpen={isNewItemDialogOpen}
        onClose={() => setIsNewItemDialogOpen(false)}
      />
    </div>
  )
}