'use client'

import { useState, useRef, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ja', ja)
import { X, Plus, Book, Video, FileText } from 'lucide-react'
import { ContentKind, ContentStatus } from '@/types'
import { useAppStore } from '@/store/useAppStore'

interface NewItemDialogProps {
  isOpen: boolean
  onClose: () => void
  initialKind?: ContentKind
}

export function NewItemDialog({ isOpen, onClose, initialKind = 'book' }: NewItemDialogProps) {
  const [formData, setFormData] = useState({
    kind: initialKind,
    title: '',
    creators: '',
    date: new Date(), // デフォルトで今日の日付（Dateオブジェクト）
    rating: '',
    oneLiner: '',
    tags: '',
    status: 'done' as ContentStatus
  })
  const titleInputRef = useRef<HTMLInputElement>(null)

  const addItem = useAppStore((state) => state.addItem)
  const undo = useAppStore((state) => state.undo)
  const redo = useAppStore((state) => state.redo)
  const canUndo = useAppStore((state) => state.canUndo)
  const canRedo = useAppStore((state) => state.canRedo)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('タイトルを入力してください')
      return
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      userId: 'user1',
      kind: formData.kind as ContentKind,
      title: formData.title.trim(),
      creators: formData.creators.split(',').map(c => c.trim()).filter(Boolean),
      date: formData.date.toISOString().split('T')[0],
      rating: formData.rating ? parseInt(formData.rating) : undefined,
      oneLiner: formData.oneLiner || undefined,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      status: formData.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    addItem(newItem)
    handleClose()
  }

  const handleClose = () => {
    setFormData({
      kind: 'book',
      title: '',
      creators: '',
      date: new Date(),
      rating: '',
      oneLiner: '',
      tags: '',
      status: 'done'
    })
    onClose()
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData(prev => ({ ...prev, title }))
  }


  // ダイアログが開いているときのキーボードショートカット
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'z':
            if (e.shiftKey) {
              // Ctrl+Shift+Z または Cmd+Shift+Z
              if (canRedo()) {
                e.preventDefault()
                redo()
              }
            } else {
              // Ctrl+Z または Cmd+Z
              if (canUndo()) {
                e.preventDefault()
                undo()
              }
            }
            break
          case 'y':
            // Ctrl+Y または Cmd+Y
            if (canRedo()) {
              e.preventDefault()
              redo()
            }
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, undo, redo, canUndo, canRedo])

  if (!isOpen) return null

  const kindOptions = [
    { value: 'book', label: '書籍', icon: Book, color: 'text-blue-400' },
    { value: 'video', label: '動画', icon: Video, color: 'text-red-400' },
    { value: 'article', label: '記事', icon: FileText, color: 'text-green-400' }
  ]

  const statusOptions = [
    { value: 'done', label: '完了' },
    { value: 'in_progress', label: '進行中' },
    { value: 'planned', label: '予定' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 lg:p-4">
      <div className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 lg:p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-lg lg:text-xl font-bold">新しい学習記録を追加</h2>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-background rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 lg:p-6 space-y-4 lg:space-y-6">
          {/* Kind Selection */}
          <div>
            <label className="block text-sm font-medium mb-3 ">種別</label>
            <div className="grid grid-cols-3 gap-3">
              {kindOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, kind: option.value as ContentKind }))
                                      }}
                    className={`p-4 border-2 rounded-xl transition-all flex flex-col items-center gap-2 ${
                      formData.kind === option.value
                        ? 'border-accent-purple bg-accent-purple bg-opacity-10'
                        : 'border-border hover:border-accent-purple hover:border-opacity-50'
                    }`}
                  >
                    <Icon size={24} className={option.color} />
                    <span className="text-sm font-medium ">{option.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Title */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2 ">
              タイトル <span className="text-red-400">*</span>
            </label>
            <input
              ref={titleInputRef}
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
              placeholder="タイトルを入力..."
              required
            />
          </div>

          {/* Creators */}
          <div>
            <label className="block text-sm font-medium mb-2 ">作者・クリエイター</label>
            <input
              type="text"
              value={formData.creators}
              onChange={(e) => setFormData(prev => ({ ...prev, creators: e.target.value }))}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all"
              placeholder="カンマ区切りで入力（例：山田太郎, 佐藤花子）"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-2 ">完了日</label>
              <DatePicker
                selected={formData.date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setFormData(prev => ({ ...prev, date }))
                  }
                }}
                locale="ja"
                dateFormat="yyyy/MM/dd (eee)"
                maxDate={new Date()}
                todayButton="今日"
                showPopperArrow={false}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-white"
                calendarClassName="bg-background border border-border rounded-xl shadow-lg"
                placeholderText="日付を選択..."
              />
              <p className="text-xs text-gray-500 mt-1">本日: {new Date().toLocaleDateString('ja-JP')}</p>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2 ">評価（1-10）</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">未評価</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-2 ">進捗状況</label>
            <div className="grid grid-cols-3 gap-3">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, status: option.value as ContentStatus }))}
                  className={`p-3 border-2 rounded-xl transition-all text-sm font-medium ${
                    formData.status === option.value
                      ? 'border-accent-purple bg-accent-purple bg-opacity-10'
                      : 'border-border hover:border-accent-purple hover:border-opacity-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* One-liner */}
          <div>
            <label className="block text-sm font-medium mb-2 ">ひと言まとめ</label>
            <input
              type="text"
              value={formData.oneLiner}
              onChange={(e) => setFormData(prev => ({ ...prev, oneLiner: e.target.value }))}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all"
              placeholder="学んだことを一言で..."
              maxLength={120}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2 ">タグ</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all"
              placeholder="カンマ区切りで入力（例：経済学, ビジネス, 価格戦略）"
            />
          </div>


          {/* Actions */}
          <div className="space-y-3 pt-4">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-6 py-3 border border-border rounded-xl hover:bg-background transition-colors"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 gradient-accent text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                追加
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                Undo: Ctrl+Z {canUndo() ? '✓' : '✗'} | Redo: Ctrl+Y {canRedo() ? '✓' : '✗'}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}