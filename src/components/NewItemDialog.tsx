'use client'

import { useState, useRef, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ja } from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ja', ja)
import { X, Plus, Book, Video, FileText } from 'lucide-react'
import { ContentKind, ContentStatus } from '@/types'
import { useAppStore } from '@/store/useAppStore'
import { TagInput } from './TagInput'
import { ExpandableMemoEditor } from './ExpandableMemoEditor'

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
    url: '',
    date: new Date(), // デフォルトで今日の日付（Dateオブジェクト）
    rating: '',
    oneLiner: '',
    tags: '',
    status: 'done' as ContentStatus
  })
  const [businessMemos, setBusinessMemos] = useState<import('@/types').BusinessMemoItem[]>([])
  const [lifeMemos, setLifeMemos] = useState<import('@/types').LifeMemoItem[]>([])
  const titleInputRef = useRef<HTMLInputElement>(null)

  const addItem = useAppStore((state) => state.addItem)
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
      // Try multiple CORS proxy services
      const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        `https://corsproxy.io/?${encodeURIComponent(url)}`,
        `https://cors-anywhere.herokuapp.com/${url}`
      ]
      
      for (const proxyUrl of proxies) {
        try {
          const response = await fetch(proxyUrl)
          
          if (proxyUrl.includes('allorigins')) {
            const data = await response.json()
            if (data.contents) {
              const parser = new DOMParser()
              const doc = parser.parseFromString(data.contents, 'text/html')
              const title = doc.querySelector('title')?.textContent?.trim()
              
              if (title && title !== formData.title) {
                setFormData(prev => ({ ...prev, title }))
                return
              }
            }
          } else {
            // Direct HTML response
            const html = await response.text()
            const parser = new DOMParser()
            const doc = parser.parseFromString(html, 'text/html')
            const title = doc.querySelector('title')?.textContent?.trim()
            
            if (title && title !== formData.title) {
              setFormData(prev => ({ ...prev, title }))
              return
            }
          }
        } catch (proxyError) {
          console.warn(`Proxy ${proxyUrl} failed:`, proxyError)
          continue
        }
      }
      
      // If all proxies fail, try to extract from common URL patterns
      const patterns = [
        /youtube\.com\/watch\?v=([^&]+)/,
        /youtu\.be\/([^?]+)/,
        /amazon\.co\.jp\/.*\/dp\/([A-Z0-9]+)/,
        /amazon\.com\/.*\/dp\/([A-Z0-9]+)/
      ]
      
      for (const pattern of patterns) {
        const match = url.match(pattern)
        if (match) {
          // Basic title extraction for known patterns
          if (url.includes('youtube') || url.includes('youtu.be')) {
            setFormData(prev => ({ ...prev, title: 'YouTube動画' }))
          } else if (url.includes('amazon')) {
            setFormData(prev => ({ ...prev, title: 'Amazon商品' }))
          }
          break
        }
      }
    } catch (error) {
      console.error('Failed to extract title:', error)
      alert('タイトルの自動取得に失敗しました。手動で入力してください。')
    } finally {
      setIsExtractingTitle(false)
    }
  }

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
      url: formData.url || undefined,
      date: formData.date.toISOString().split('T')[0],
      rating: formData.rating ? parseInt(formData.rating) : undefined,
      oneLiner: formData.oneLiner || undefined,
      businessMemo: businessMemos,
      lifeMemo: lifeMemos,
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
      url: '',
      date: new Date(),
      rating: '',
      oneLiner: '',
      tags: '',
      status: 'done'
    })
    setBusinessMemos([])
    setLifeMemos([])
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
        <form onSubmit={handleSubmit} className="p-4 lg:p-6 space-y-4">
          {/* 重要: メモ欄を最上位に配置 */}
          <div className="space-y-4 p-4 bg-card/50 rounded-lg border-2 border-cyan-500/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✍️</span>
              <h3 className="text-lg font-bold text-cyan-300">メモ欄（メイン）</h3>
              <span className="text-xs text-gray-500">作成後に編集可能</span>
            </div>
            
            {/* Business Memo */}
            <ExpandableMemoEditor
              type="business"
              items={businessMemos}
              onItemsChange={setBusinessMemos}
              placeholder="• Enterで箇条書き&#10;• Shift+Enterで改行&#10;• 企画・ビジネスアイデア"
              title="💡 企画に生かせそうな内容"
            />

            {/* Life Memo */}
            <ExpandableMemoEditor
              type="life"
              items={lifeMemos}
              onItemsChange={setLifeMemos}
              placeholder="• Enterで箇条書き&#10;• Shift+Enterで改行&#10;• 人生の教訓・気づき"
              title="🌟 人生において生かせそうなエッセンス"
            />
          </div>

          {/* コンパクトな基本情報セクション */}
          <div className="space-y-3 p-3 bg-background/50 rounded-lg border border-border">
            <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <span>📝</span> 基本情報（コンパクト）
            </h4>

            {/* URL - First */}
            <div>
              <label className="block text-xs font-medium mb-1">
                URL <span className="text-cyan-300 text-xs">（自動取得）</span>
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
                  className="flex-1 px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={() => extractTitleFromUrl(formData.url)}
                  disabled={!formData.url || !formData.url.startsWith('http') || isExtractingTitle}
                  className="px-2 py-1 bg-cyan-900 hover:bg-cyan-800 disabled:bg-gray-700 disabled:cursor-not-allowed text-cyan-100 rounded transition-colors text-xs flex items-center gap-1"
                  title="URLからタイトルを自動取得"
                >
                  {isExtractingTitle ? (
                    <div className="w-3 h-3 border border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    '取得'
                  )}
                </button>
              </div>
            </div>

            {/* Kind Selection - Ultra Compact */}
            <div className="flex items-center gap-3">
              <label className="text-xs font-medium">種別:</label>
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
                      className={`p-2 border rounded transition-all ${
                        formData.kind === option.value
                          ? 'border-accent-purple bg-accent-purple bg-opacity-20'
                          : 'border-border hover:border-accent-purple'
                      }`}
                      title={option.label}
                    >
                      <Icon size={16} className={option.color} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 超コンパクト基本情報 */}
            <div className="grid grid-cols-12 gap-2 text-xs">
              <div className="col-span-6">
                <label className="block text-xs font-medium mb-1">
                  タイトル <span className="text-red-400">*</span>
                </label>
                <input
                  ref={titleInputRef}
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-xs"
                  placeholder="タイトル"
                  required
                />
              </div>

              <div className="col-span-4">
                <label className="block text-xs font-medium mb-1">作者</label>
                <input
                  type="text"
                  value={formData.creators}
                  onChange={(e) => setFormData(prev => ({ ...prev, creators: e.target.value }))}
                  className="w-full px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-xs"
                  placeholder="作者名"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-medium mb-1">評価</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                  className="w-full px-1 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-xs"
                >
                  <option value="">-</option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 日付、ステータス、タグを1行に */}
            <div className="grid grid-cols-12 gap-2 text-xs">
              <div className="col-span-3">
                <label className="block text-xs font-medium mb-1">完了日</label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date: Date | null) => {
                    if (date) {
                      setFormData(prev => ({ ...prev, date }))
                    }
                  }}
                  locale="ja"
                  dateFormat="MM/dd"
                  maxDate={new Date()}
                  todayButton="今日"
                  showPopperArrow={false}
                  className="w-full px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-white text-xs"
                  calendarClassName="bg-background border border-border rounded-xl shadow-lg"
                  placeholderText="日付"
                />
              </div>

              <div className="col-span-4">
                <label className="block text-xs font-medium mb-1">進捗</label>
                <div className="flex gap-1">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, status: option.value as ContentStatus }))}
                      className={`px-1 py-1 border rounded transition-all text-xs font-medium flex-1 ${
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

              <div className="col-span-5">
                <label className="block text-xs font-medium mb-1">一言</label>
                <input
                  type="text"
                  value={formData.oneLiner}
                  onChange={(e) => setFormData(prev => ({ ...prev, oneLiner: e.target.value }))}
                  className="w-full px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-xs"
                  placeholder="一言まとめ"
                  maxLength={50}
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-medium mb-1">タグ</label>
              <TagInput
                value={formData.tags}
                onChange={(value) => setFormData(prev => ({ ...prev, tags: value }))}
                className="w-full px-2 py-1 bg-background border border-border rounded focus:ring-1 focus:ring-accent-purple focus:border-transparent outline-none transition-all text-xs"
                placeholder="カンマ区切り（例：経済学, ビジネス）"
              />
            </div>
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