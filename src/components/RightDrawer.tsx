'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Edit2, ExternalLink, Plus, Trash2, GripVertical } from 'lucide-react'
import { BulletPoint, Highlight, Link } from '@/types'
import { useAppStore } from '@/store/useAppStore'
import { LongNoteEditor } from './LongNoteEditor'

interface RightDrawerProps {
  itemId: string
  onClose: () => void
}

type TabType = 'overview' | 'ideas' | 'learnings' | 'notes' | 'highlights' | 'links'

export function RightDrawer({ itemId, onClose }: RightDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [isEditing, setIsEditing] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  
  // Zustand store
  const item = useAppStore((state) => state.items.find(i => i.id === itemId))
  const itemDetails = useAppStore((state) => state.itemDetails[itemId])
  const updateWorkIdea = useAppStore((state) => state.updateWorkIdea)
  const deleteWorkIdea = useAppStore((state) => state.deleteWorkIdea)
  const addWorkIdea = useAppStore((state) => state.addWorkIdea)
  const addLearning = useAppStore((state) => state.addLearning)
  const deleteLearning = useAppStore((state) => state.deleteLearning)
  const updateItemDetails = useAppStore((state) => state.updateItemDetails)

  const tabs = [
    { id: 'overview', label: '概要', icon: '📋' },
    { id: 'ideas', label: 'アイデア', icon: '💡' },
    { id: 'learnings', label: '学び', icon: '📚' },
    { id: 'notes', label: 'ノート', icon: '📝' },
    { id: 'highlights', label: '引用', icon: '🔖' },
    { id: 'links', label: 'リンク', icon: '🔗' }
  ] as const

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const BulletPointList = ({ 
    points, 
    type,
    hasCheckboxes = false 
  }: { 
    points: BulletPoint[]
    type: 'ideas' | 'learnings'
    hasCheckboxes?: boolean 
  }) => {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editingText, setEditingText] = useState('')
    const [newItemText, setNewItemText] = useState('')
    const [isAddingNew, setIsAddingNew] = useState(false)

    const handleEdit = (point: BulletPoint) => {
      setEditingId(point.id)
      setEditingText(point.text)
    }

    const handleSaveEdit = () => {
      if (editingId && editingText.trim()) {
        if (type === 'ideas') {
          updateWorkIdea(itemId, editingId, { text: editingText.trim() })
        } else {
          const updateLearning = useAppStore.getState().updateLearning
          updateLearning(itemId, editingId, { text: editingText.trim() })
        }
      }
      setEditingId(null)
      setEditingText('')
    }

    const handleCancelEdit = () => {
      setEditingId(null)
      setEditingText('')
    }

    const handleAddNew = () => {
      if (newItemText.trim()) {
        if (type === 'ideas') {
          addWorkIdea(itemId, newItemText.trim())
        } else {
          addLearning(itemId, newItemText.trim())
        }
        setNewItemText('')
        setIsAddingNew(false)
      }
    }

    const handleCancelAdd = () => {
      setNewItemText('')
      setIsAddingNew(false)
    }

    return (
      <div className="space-y-2">
        {points.map((point) => (
          <div key={point.id} className="group flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-card transition-colors">
            <div className="flex items-center gap-2">
              <GripVertical size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
              {hasCheckboxes && (
                <input
                  type="checkbox"
                  checked={point.checked || false}
                  className="rounded border-gray-300 text-accent-purple focus:ring-accent-purple focus:ring-offset-0"
                  onChange={(e) => {
                    updateWorkIdea(itemId, point.id, { checked: e.target.checked })
                  }}
                />
              )}
            </div>
            <div className="flex-1">
              {editingId === point.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      e.stopPropagation()
                      if (e.key === 'Enter' && e.ctrlKey) {
                        handleSaveEdit()
                      } else if (e.key === 'Escape') {
                        handleCancelEdit()
                      }
                    }}
                    className="w-full px-2 py-1 text-sm bg-background border border-border rounded focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="px-2 py-1 text-xs bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
                    >
                      保存 (Ctrl+Enter)
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-2 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      キャンセル (Esc)
                    </button>
                  </div>
                </div>
              ) : (
                <p 
                  className={`text-sm cursor-pointer hover:bg-background/50 px-1 py-0.5 rounded ${point.checked ? 'line-through opacity-60' : ''}`}
                  onClick={() => handleEdit(point)}
                  title="クリックで編集"
                >
                  {point.text}
                </p>
              )}
            </div>
            <div className="flex gap-1">
              <button 
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-cyan-900/50 rounded transition-all"
                onClick={() => handleEdit(point)}
                title="編集"
              >
                <Edit2 size={12} className="text-cyan-300" />
              </button>
              <button 
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-900/50 rounded transition-all"
                onClick={() => {
                  if (type === 'ideas') {
                    deleteWorkIdea(itemId, point.id)
                  } else {
                    deleteLearning(itemId, point.id)
                  }
                }}
                title="削除"
              >
                <Trash2 size={12} className="text-red-300" />
              </button>
            </div>
          </div>
        ))}
        
        {isAddingNew ? (
          <div className="p-3 border-2 border-dashed border-cyan-500/50 rounded-lg bg-card/50">
            <div className="space-y-2">
              <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                onKeyDown={(e) => {
                  e.stopPropagation()
                  if (e.key === 'Enter' && e.ctrlKey) {
                    handleAddNew()
                  } else if (e.key === 'Escape') {
                    handleCancelAdd()
                  }
                }}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                placeholder={`新しい${type === 'ideas' ? 'アイデア' : '学び'}を入力...`}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAddNew}
                  disabled={!newItemText.trim()}
                  className="px-3 py-1 text-xs bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  追加 (Ctrl+Enter)
                </button>
                <button
                  onClick={handleCancelAdd}
                  className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  キャンセル (Esc)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsAddingNew(true)}
            className="w-full p-3 border-2 border-dashed border-border hover:border-cyan-500 hover:bg-cyan-500/5 rounded-lg transition-colors text-sm text-gray-400 hover:text-cyan-300 flex items-center justify-center gap-2"
          >
            <Plus size={16} />
            新しい{type === 'ideas' ? 'アイデア' : '学び'}を追加
          </button>
        )}
      </div>
    )
  }

  const HighlightsList = ({ highlights }: { highlights: Highlight[] }) => (
    <div className="space-y-4">
      {highlights.map((highlight) => (
        <div key={highlight.id} className="p-4 bg-card rounded-lg border border-border">
          <blockquote className="border-l-4 border-accent-purple pl-4 italic text-foreground mb-3">
            "{highlight.quote}"
          </blockquote>
          {highlight.source && (
            <p className="text-sm text-gray-500 mb-2">出典: {highlight.source}</p>
          )}
          {highlight.note && (
            <p className="text-sm text-foreground opacity-80">{highlight.note}</p>
          )}
          {highlight.timestamp && (
            <p className="text-xs text-gray-500 mt-2">タイムスタンプ: {highlight.timestamp}</p>
          )}
        </div>
      ))}
      <button className="w-full p-3 border-2 border-dashed border-border hover:border-accent-purple hover:bg-accent-purple hover:bg-opacity-5 rounded-lg transition-colors text-sm text-gray-500 hover:text-accent-purple flex items-center justify-center gap-2">
        <Plus size={16} />
        新しい引用を追加
      </button>
    </div>
  )

  const LinksList = ({ links }: { links: Link[] }) => (
    <div className="space-y-2">
      {links.map((link, index) => (
        <div key={index} className="group flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-background transition-colors">
          <ExternalLink size={16} className="text-accent-blue flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{link.label}</p>
            <p className="text-xs text-gray-500 truncate">{link.url}</p>
          </div>
          <button 
            onClick={() => window.open(link.url, '_blank')}
            className="opacity-0 group-hover:opacity-100 px-3 py-1 bg-accent-blue text-white text-xs rounded hover:bg-blue-600 transition-all"
          >
            開く
          </button>
        </div>
      ))}
      <button className="w-full p-3 border-2 border-dashed border-border hover:border-accent-purple hover:bg-accent-purple hover:bg-opacity-5 rounded-lg transition-colors text-sm text-gray-500 hover:text-accent-purple flex items-center justify-center gap-2">
        <Plus size={16} />
        新しいリンクを追加
      </button>
    </div>
  )

  const renderTabContent = () => {
    if (!item || !itemDetails) return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>データが見つかりません</p>
      </div>
    )

    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">基本情報</h3>
              <div className="space-y-3">
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">タイトル</p>
                  <p className="font-medium">{item.title}</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">作者・クリエイター</p>
                  <p>{item.creators.join(', ')}</p>
                </div>
                {item.date && (
                  <div className="p-4 bg-card rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">完了日</p>
                    <p>{new Date(item.date).toLocaleDateString('ja-JP')}</p>
                  </div>
                )}
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">評価</p>
                  <p>{item.rating ? `${item.rating}/10` : '未評価'}</p>
                </div>
                {item.oneLiner && (
                  <div className="p-4 bg-card rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">ひと言まとめ</p>
                    <p>{item.oneLiner}</p>
                  </div>
                )}
                {item.tags.length > 0 && (
                  <div className="p-4 bg-card rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">タグ</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-accent-purple bg-opacity-20 text-accent-purple rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      case 'ideas':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">仕事に生かせそうなネタ</h3>
              <span className="text-sm text-gray-500">{itemDetails.workIdeas.length}件</span>
            </div>
            <BulletPointList points={itemDetails.workIdeas} type="ideas" hasCheckboxes />
          </div>
        )
      case 'learnings':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">学んだこと</h3>
              <span className="text-sm text-gray-500">{itemDetails.learnings.length}件</span>
            </div>
            <BulletPointList points={itemDetails.learnings} type="learnings" />
          </div>
        )
      case 'notes':
        return <LongNoteEditor itemId={itemId} initialNote={itemDetails.longNote} />
      case 'highlights':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">引用・ハイライト</h3>
              <span className="text-sm text-gray-500">{itemDetails.highlights.length}件</span>
            </div>
            <HighlightsList highlights={itemDetails.highlights} />
          </div>
        )
      case 'links':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">関連リンク</h3>
              <span className="text-sm text-gray-500">{itemDetails.links.length}件</span>
            </div>
            <LinksList links={itemDetails.links} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div 
      ref={drawerRef}
      className="w-full md:w-96 lg:w-96 bg-background md:border-l lg:border-l border-border h-full flex flex-col animate-drawer-open"
    >
      {/* Header */}
      <div className="p-4 lg:p-6 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg lg:text-xl font-bold">詳細情報</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-background rounded-lg transition-colors"
            aria-label="閉じる"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 text-xs rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'gradient-accent text-white shadow-sm'
                  : 'text-foreground opacity-70 hover:opacity-100 hover:bg-background'
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span className="hidden md:inline lg:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        {renderTabContent()}
      </div>

      {/* Footer */}
      {itemDetails && (
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>最終更新: {new Date(itemDetails.updatedAt).toLocaleDateString('ja-JP')}</span>
            <span>v{itemDetails.version}</span>
          </div>
        </div>
      )}
    </div>
  )
}