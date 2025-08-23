'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Trash2, GripVertical } from 'lucide-react'
import { BusinessMemoItem, LifeMemoItem } from '@/types'

interface ExpandableMemoEditorProps {
  type: 'business' | 'life'
  items: BusinessMemoItem[] | LifeMemoItem[]
  onItemsChange: (items: BusinessMemoItem[] | LifeMemoItem[]) => void
  placeholder?: string
  title: string
}

export function ExpandableMemoEditor({ 
  type, 
  items, 
  onItemsChange, 
  placeholder = "• Enterで箇条書き\n• Shift+Enterで改行", 
  title 
}: ExpandableMemoEditorProps) {
  const [newItemText, setNewItemText] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingText, setEditingText] = useState('')
  const newItemRef = useRef<HTMLTextAreaElement>(null)
  const editingRef = useRef<HTMLTextAreaElement>(null)

  const generateId = () => Math.random().toString(36).substr(2, 9)

  const handleAddNew = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: generateId(),
        text: newItemText.trim(),
        order: items.length,
        createdAt: new Date().toISOString()
      }
      onItemsChange([...items, newItem])
      setNewItemText('')
      setIsAddingNew(false)
    }
  }

  const handleEdit = (item: BusinessMemoItem | LifeMemoItem) => {
    setEditingId(item.id)
    setEditingText(item.text)
  }

  const handleSaveEdit = () => {
    if (editingId && editingText.trim()) {
      const updatedItems = items.map(item => 
        item.id === editingId 
          ? { ...item, text: editingText.trim() }
          : item
      )
      onItemsChange(updatedItems)
    }
    setEditingId(null)
    setEditingText('')
  }

  const handleDelete = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id)
      .map((item, index) => ({ ...item, order: index }))
    onItemsChange(updatedItems)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, isEditing = false) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const textarea = e.currentTarget
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const value = textarea.value
      const newValue = value.substring(0, start) + '\n• ' + value.substring(end)
      
      if (isEditing) {
        setEditingText(newValue)
      } else {
        setNewItemText(newValue)
      }
      
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 3
      }, 0)
    } else if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault()
      if (isEditing) {
        handleSaveEdit()
      } else {
        handleAddNew()
      }
    } else if (e.key === 'Escape') {
      if (isEditing) {
        setEditingId(null)
        setEditingText('')
      } else {
        setIsAddingNew(false)
        setNewItemText('')
      }
    }
  }

  // Auto-resize textarea
  const autoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  useEffect(() => {
    if (newItemRef.current) {
      autoResize(newItemRef.current)
    }
  }, [newItemText])

  useEffect(() => {
    if (editingRef.current) {
      autoResize(editingRef.current)
    }
  }, [editingText])

  useEffect(() => {
    if (isAddingNew && newItemRef.current) {
      newItemRef.current.focus()
    }
  }, [isAddingNew])

  useEffect(() => {
    if (editingId && editingRef.current) {
      editingRef.current.focus()
      editingRef.current.setSelectionRange(editingRef.current.value.length, editingRef.current.value.length)
    }
  }, [editingId])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium">{title}</label>
        <span className="text-xs text-gray-500">{items.length}個</span>
      </div>

      {/* Existing items */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="group border border-border rounded-lg overflow-hidden">
            {editingId === item.id ? (
              <div className="p-3">
                <textarea
                  ref={editingRef}
                  value={editingText}
                  onChange={(e) => {
                    setEditingText(e.target.value)
                    autoResize(e.target)
                  }}
                  onKeyDown={(e) => handleKeyDown(e, true)}
                  className="w-full bg-transparent border-none resize-none focus:outline-none text-sm min-h-[60px]"
                  rows={3}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 text-xs bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
                  >
                    保存 (Ctrl+Enter)
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null)
                      setEditingText('')
                    }}
                    className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    キャンセル (Esc)
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start">
                <div className="flex-1 p-3">
                  <div 
                    className="text-sm whitespace-pre-wrap cursor-pointer hover:bg-background/50 p-1 rounded transition-colors"
                    onClick={() => handleEdit(item)}
                    title="クリックで編集"
                  >
                    {item.text}
                  </div>
                </div>
                <div className="flex items-start gap-1 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    className="p-1 hover:bg-gray-800 rounded transition-colors"
                    title="並び替え"
                  >
                    <GripVertical size={14} className="text-gray-500" />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-1 hover:bg-red-900/50 rounded transition-colors"
                    title="削除"
                  >
                    <Trash2 size={14} className="text-red-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new item interface */}
      {isAddingNew ? (
        <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-3 bg-card/50">
          <textarea
            ref={newItemRef}
            value={newItemText}
            onChange={(e) => {
              setNewItemText(e.target.value)
              autoResize(e.target)
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-none resize-none focus:outline-none text-sm placeholder-gray-500 min-h-[60px]"
            placeholder={placeholder}
            rows={3}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleAddNew}
              disabled={!newItemText.trim()}
              className="px-3 py-1 text-xs bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              追加 (Ctrl+Enter)
            </button>
            <button
              onClick={() => {
                setIsAddingNew(false)
                setNewItemText('')
              }}
              className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              キャンセル (Esc)
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsAddingNew(true)}
          className="w-full p-3 border-2 border-dashed border-border hover:border-cyan-500 hover:bg-cyan-500/5 rounded-lg transition-colors text-sm text-gray-400 hover:text-cyan-300 flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          新しい{type === 'business' ? '企画メモ' : '人生メモ'}を追加
        </button>
      )}
    </div>
  )
}