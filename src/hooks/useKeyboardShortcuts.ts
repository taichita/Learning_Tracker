'use client'

import { useEffect, useCallback } from 'react'

export interface KeyboardShortcutHandlers {
  onCommandPalette: () => void
  onNewItem: () => void
  onEdit: () => void
  onDelete: () => void
  onUndo: () => void
  onRedo: () => void
  onSearch: () => void
  onEscape: () => void
  onArrowUp: () => void
  onArrowDown: () => void
  onEnter: () => void
}

export function useKeyboardShortcuts(handlers: Partial<KeyboardShortcutHandlers>) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const ctrlKey = isMac ? e.metaKey : e.ctrlKey

    // Command Palette (Ctrl/Cmd + K)
    if (ctrlKey && e.key === 'k') {
      e.preventDefault()
      handlers.onCommandPalette?.()
      return
    }

    // New Item (N key, when not in input)
    if (e.key === 'n' || e.key === 'N') {
      const target = e.target as HTMLElement
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        e.preventDefault()
        handlers.onNewItem?.()
        return
      }
    }

    // Edit (E key, when not in input)
    if (e.key === 'e' || e.key === 'E') {
      const target = e.target as HTMLElement
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        e.preventDefault()
        handlers.onEdit?.()
        return
      }
    }

    // Delete (Del key, when not in input)
    if (e.key === 'Delete') {
      const target = e.target as HTMLElement
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        e.preventDefault()
        handlers.onDelete?.()
        return
      }
    }

    // Undo (Ctrl/Cmd + Z)
    if (ctrlKey && e.key === 'z' && !e.shiftKey) {
      e.preventDefault()
      handlers.onUndo?.()
      return
    }

    // Redo (Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z)
    if ((ctrlKey && e.key === 'y') || (ctrlKey && e.key === 'z' && e.shiftKey)) {
      e.preventDefault()
      handlers.onRedo?.()
      return
    }

    // Search (/ key, when not in input)
    if (e.key === '/') {
      const target = e.target as HTMLElement
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        e.preventDefault()
        handlers.onSearch?.()
        return
      }
    }

    // Navigation keys
    switch (e.key) {
      case 'Escape':
        handlers.onEscape?.()
        break
      case 'ArrowUp':
        const isInTable = (e.target as HTMLElement).closest('table, [role="table"]')
        if (isInTable) {
          e.preventDefault()
          handlers.onArrowUp?.()
        }
        break
      case 'ArrowDown':
        const isInTableDown = (e.target as HTMLElement).closest('table, [role="table"]')
        if (isInTableDown) {
          e.preventDefault()
          handlers.onArrowDown?.()
        }
        break
      case 'Enter':
        const isInTableEnter = (e.target as HTMLElement).closest('table, [role="table"]')
        if (isInTableEnter && !['INPUT', 'TEXTAREA', 'BUTTON'].includes((e.target as HTMLElement).tagName)) {
          e.preventDefault()
          handlers.onEnter?.()
        }
        break
    }
  }, [handlers])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Return helper function to check if key combination is pressed
  const isShortcut = useCallback((key: string, ctrlKey?: boolean) => {
    return (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      const isCtrl = isMac ? e.metaKey : e.ctrlKey
      
      if (ctrlKey !== undefined && isCtrl !== ctrlKey) return false
      return e.key === key
    }
  }, [])

  return { isShortcut }
}