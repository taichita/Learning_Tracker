'use client'

import { useState, useRef } from 'react'
import { Edit2, Save, X } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'

interface LongNoteEditorProps {
  itemId: string
  initialNote: string
}

export function LongNoteEditor({ itemId, initialNote }: LongNoteEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [noteText, setNoteText] = useState(initialNote)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const updateItemDetails = useAppStore((state) => state.updateItemDetails)

  const handleStartEdit = () => {
    setNoteText(initialNote)
    setIsEditing(true)
    setHasUnsavedChanges(false)
    setTimeout(() => {
      textareaRef.current?.focus()
    }, 100)
  }

  const handleSave = () => {
    updateItemDetails(itemId, { longNote: noteText })
    setIsEditing(false)
    setHasUnsavedChanges(false)
  }

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      if (confirm('保存されていない変更があります。破棄しますか？')) {
        setNoteText(initialNote)
        setIsEditing(false)
        setHasUnsavedChanges(false)
      }
    } else {
      setNoteText(initialNote)
      setIsEditing(false)
      setHasUnsavedChanges(false)
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value)
    setHasUnsavedChanges(e.target.value !== initialNote)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Prevent global shortcuts when editing
    e.stopPropagation()
    
    if (e.key === 'Escape') {
      handleCancel()
    } else if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      handleSave()
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">長文ノート</h3>
        {!isEditing ? (
          <button 
            onClick={handleStartEdit}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
          >
            <Edit2 size={14} />
            編集
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <Save size={14} />
              保存 (Ctrl+S)
            </button>
            <button 
              onClick={handleCancel}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              <X size={14} />
              キャンセル (Esc)
            </button>
          </div>
        )}
      </div>
      
      {isEditing ? (
        <div className="space-y-2">
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={noteText}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              className="w-full h-96 p-4 bg-card border border-border rounded-lg resize-none font-mono text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
              placeholder="Markdownでノートを記述..."
            />
            {hasUnsavedChanges && (
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 text-xs bg-amber-600 text-white rounded">
                  未保存
                </span>
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500">
            📝 Ctrl+S で保存、Esc でキャンセル
          </div>
        </div>
      ) : (
        <div className="p-4 bg-card rounded-lg border border-border min-h-[200px]">
          {initialNote ? (
            <div className="prose prose-sm prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed font-serif">
                {initialNote}
              </pre>
            </div>
          ) : (
            <div className="text-gray-500 text-sm italic text-center py-12">
              まだノートが作成されていません。<br />
              「編集」ボタンをクリックして作成してください。
            </div>
          )}
        </div>
      )}
    </div>
  )
}