'use client'

import { useState, useEffect } from 'react'
import { MonthSidebar } from '@/components/MonthSidebar'
import { MainTable } from '@/components/MainTable'
import { RightDrawer } from '@/components/RightDrawer'
import { CommandPalette } from '@/components/CommandPalette'
import { NewItemDialog } from '@/components/NewItemDialog'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { useAppStore } from '@/store/useAppStore'

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isNewItemDialogOpen, setIsNewItemDialogOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  
  // Zustand store
  const selectedItem = useAppStore((state) => state.selectedItem)
  const selectedMonth = useAppStore((state) => state.selectedMonth)
  const setSelectedItem = useAppStore((state) => state.setSelectedItem)
  const setSelectedMonth = useAppStore((state) => state.setSelectedMonth)
  const undo = useAppStore((state) => state.undo)
  const redo = useAppStore((state) => state.redo)
  const canUndo = useAppStore((state) => state.canUndo)
  const canRedo = useAppStore((state) => state.canRedo)

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