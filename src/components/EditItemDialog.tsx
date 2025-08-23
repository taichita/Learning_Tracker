'use client'

import { useState, useRef, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ja } from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ja', ja)
import { X, Save, Book, Video, FileText } from 'lucide-react'
import { ContentKind, ContentStatus, ContentItem } from '@/types'
import { useAppStore } from '@/store/useAppStore'
import { TagInput } from './TagInput'
import { ExpandableMemoEditor } from './ExpandableMemoEditor'

interface EditItemDialogProps {
  isOpen: boolean
  onClose: () => void
  item: ContentItem
}

export function EditItemDialog({ isOpen, onClose, item }: EditItemDialogProps) {
  const [formData, setFormData] = useState({
    kind: item.kind,
    title: item.title,
    creators: item.creators.join(', '),
    url: item.url || '',
    date: item.date ? new Date(item.date) : new Date(),
    rating: item.rating?.toString() || '',
    oneLiner: item.oneLiner || '',
    tags: item.tags.join(', '),
    status: item.status
  })
  const titleInputRef = useRef<HTMLInputElement>(null)

  const updateItem = useAppStore((state) => state.updateItem)
  const updateBusinessMemos = useAppStore((state) => state.updateBusinessMemos)
  const updateLifeMemos = useAppStore((state) => state.updateLifeMemos)
  const undo = useAppStore((state) => state.undo)
  const redo = useAppStore((state) => state.redo)
  const canUndo = useAppStore((state) => state.canUndo)
  const canRedo = useAppStore((state) => state.canRedo)
  
  // URL title extraction state
  const [isExtractingTitle, setIsExtractingTitle] = useState(false)

  // Extract title from URL
  const extractTitleFromUrl = async (url: string) => {
    if (!url || !url.startsWith('http')) return

    setIsExtractingTitle(true)
    try {
      // Use a CORS proxy service to fetch the page
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      const response = await fetch(proxyUrl)
      const data = await response.json()
      
      if (data.contents) {
        // Parse HTML to extract title
        const parser = new DOMParser()
        const doc = parser.parseFromString(data.contents, 'text/html')
        const title = doc.querySelector('title')?.textContent?.trim()
        
        if (title && title !== formData.title) {
          setFormData(prev => ({ ...prev, title }))
        }
      }
    } catch (error) {
      console.error('Failed to extract title:', error)
    } finally {
      setIsExtractingTitle(false)
    }
  }

  // Reset form data when item changes
  useEffect(() => {
    if (item) {
      setFormData({
        kind: item.kind,
        title: item.title,
        creators: item.creators.join(', '),
        url: item.url || '',
        date: item.date ? new Date(item.date) : new Date(),
        rating: item.rating?.toString() || '',
        oneLiner: item.oneLiner || '',
        tags: item.tags.join(', '),
        status: item.status
      })
    }
  }, [item])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('タイトルを入力してください')
      return
    }

    const updatedItem: Partial<ContentItem> = {
      kind: formData.kind as ContentKind,
      title: formData.title.trim(),
      creators: formData.creators.split(',').map(c => c.trim()).filter(Boolean),
      date: formData.date.toISOString().split('T')[0],
      rating: formData.rating ? parseInt(formData.rating) : undefined,
      oneLiner: formData.oneLiner || undefined,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      status: formData.status,
      updatedAt: new Date().toISOString()
    }

    updateItem(item.id, updatedItem)
    onClose()
  }

  const handleClose = () => {
    // Reset form to original values
    if (item) {
      setFormData({
        kind: item.kind,
        title: item.title,
        creators: item.creators.join(', '),
        url: item.url || '',
        date: item.date ? new Date(item.date) : new Date(),
        rating: item.rating?.toString() || '',
        oneLiner: item.oneLiner || '',
        tags: item.tags.join(', '),
        status: item.status
      })
    }
    onClose()
  }

  // Dialog keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'z':
            if (e.shiftKey) {
              if (canRedo()) {
                e.preventDefault()
                redo()
              }
            } else {
              if (canUndo()) {
                e.preventDefault()
                undo()
              }
            }
            break
          case 'y':
            if (canRedo()) {
              e.preventDefault()
              redo()
            }
            break
          case 's':
            e.preventDefault()
            document.querySelector('form')?.requestSubmit()
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
      <div className="bg-card border border-border rounded-2xl w-full max-w-[95vw] lg:max-w-[90vw] xl:max-w-[85vw] max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 lg:p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-lg lg:text-xl font-bold">学習記録を編集</h2>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-background rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 lg:p-6 space-y-2">
          {/* URL - Most Important Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              URL <span className="text-cyan-300 text-xs">（最重要）</span>
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                onBlur={(e) => {
                  if (e.target.value && e.target.value.startsWith('http') && !formData.title.trim()) {
                    extractTitleFromUrl(e.target.value)
                  }
                }}
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                placeholder="https://..."
              />
              <button
                type="button"
                onClick={() => extractTitleFromUrl(formData.url)}
                disabled={!formData.url || !formData.url.startsWith('http') || isExtractingTitle}
                className="px-3 py-2 bg-cyan-900 hover:bg-cyan-800 disabled:bg-gray-700 disabled:cursor-not-allowed text-cyan-100 rounded-lg transition-colors text-sm flex items-center gap-1"
                title="URLからタイトルを自動取得"
              >
                {isExtractingTitle ? (
                  <div className="w-4 h-4 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  '取得'
                )}
              </button>
            </div>
          </div>

          {/* Compact Top Row - Kind, Title, Creators */}
          <div className="grid grid-cols-12 gap-2">
            {/* Kind Selection - Ultra Compact */}
            <div className="col-span-3">
              <label className="block text-xs font-medium mb-1">種別</label>
              <div className="flex gap-1">
                {kindOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, kind: option.value as ContentKind }))
                      }}
                      className={`p-1.5 border rounded transition-all ${
                        formData.kind === option.value
                          ? 'border-accent-purple bg-accent-purple bg-opacity-20'
                          : 'border-border hover:border-accent-purple'
                      }`}
                      title={option.label}
                    >
                      <Icon size={14} className={option.color} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Title - Compact */}
            <div className="col-span-6">
              <label className="block text-xs font-medium mb-1">
                タイトル <span className="text-red-400">*</span>
              </label>
              <input
                ref={titleInputRef}
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-sm"
                placeholder="タイトル"
                required
              />
            </div>

            {/* Creators - Compact */}
            <div className="col-span-3">
              <label className="block text-xs font-medium mb-1">作者</label>
              <input
                type="text"
                value={formData.creators}
                onChange={(e) => setFormData(prev => ({ ...prev, creators: e.target.value }))}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-sm"
                placeholder="作者名"
              />
            </div>
          </div>

          {/* Compact Metadata Row */}
          <div className="grid grid-cols-12 gap-2">
            {/* Date - Compact */}
            <div className="col-span-4">
              <label className="block text-xs font-medium mb-1">完了日</label>
              <DatePicker
                selected={formData.date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setFormData(prev => ({ ...prev, date }))
                  }
                }}
                locale="ja"
                dateFormat="yyyy/MM/dd"
                maxDate={new Date()}
                todayButton="今日"
                showPopperArrow={false}
                className="w-full px-2 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-white text-sm"
                calendarClassName="bg-background border border-border rounded-xl shadow-lg"
                placeholderText="日付"
              />
            </div>

            {/* Rating - Compact */}
            <div className="col-span-3">
              <label className="block text-xs font-medium mb-1">評価</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                className="w-full px-2 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-sm"
              >
                <option value="">-</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Status - Compact */}
            <div className="col-span-5">
              <label className="block text-xs font-medium mb-1">進捗</label>
              <div className="flex gap-1">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, status: option.value as ContentStatus }))}
                    className={`px-2 py-1 border rounded transition-all text-xs font-medium flex-1 ${
                      formData.status === option.value
                        ? 'border-accent-purple bg-accent-purple bg-opacity-20'
                        : 'border-border hover:border-accent-purple'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* One-liner - Compact */}
          <div>
            <label className="block text-xs font-medium mb-1">ひと言まとめ</label>
            <input
              type="text"
              value={formData.oneLiner}
              onChange={(e) => setFormData(prev => ({ ...prev, oneLiner: e.target.value }))}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-sm"
              placeholder="学んだことを一言で..."
              maxLength={120}
            />
          </div>

          {/* Tags - Compact with Suggestions */}
          <div>
            <label className="block text-xs font-medium mb-1">タグ</label>
            <TagInput
              value={formData.tags}
              onChange={(value) => setFormData(prev => ({ ...prev, tags: value }))}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-sm"
              placeholder="カンマ区切り（例：経済学, ビジネス）"
            />
          </div>

          {/* Main Content - Expandable Memo Fields */}
          <div className="space-y-4 pt-2 border-t border-border">
            <h3 className="text-sm font-bold text-cyan-300">メモ欄（重要）</h3>
            
            {/* Business Memo */}
            <ExpandableMemoEditor
              type="business"
              items={item.businessMemo || []}
              onItemsChange={(items) => updateBusinessMemos(item.id, items)}
              placeholder="• Enterで箇条書き&#10;• Shift+Enterで改行&#10;• 企画・ビジネスアイデア"
              title="企画に生かせそうな内容のメモ"
            />

            {/* Life Memo */}
            <ExpandableMemoEditor
              type="life"
              items={item.lifeMemo || []}
              onItemsChange={(items) => updateLifeMemos(item.id, items)}
              placeholder="• Enterで箇条書き&#10;• Shift+Enterで改行&#10;• 人生の教訓・気づき"
              title="人生において生かせそうなエッセンスのメモ"
            />
          </div>

          {/* Actions - Compact */}
          <div className="space-y-2 pt-3 border-t border-border">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-background transition-colors text-sm"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 gradient-accent text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
              >
                <Save size={14} />
                保存 (Ctrl+S)
              </button>
            </div>
            <div className="text-xs text-gray-500 text-center">
              Undo: Ctrl+Z {canUndo() ? '✓' : '✗'} | Redo: Ctrl+Y {canRedo() ? '✓' : '✗'}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}