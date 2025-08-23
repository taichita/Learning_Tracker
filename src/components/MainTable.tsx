'use client'

import { ContentKind, ContentStatus } from '@/types'
import { Book, Video, FileText, ExternalLink, Star, Plus, Trash2, Menu } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useState } from 'react'
import { NewItemDialog } from './NewItemDialog'

interface MainTableProps {
  selectedMonth: string
  selectedItem: string | null
  onItemSelect: (itemId: string | null) => void
  onMobileMenuOpen?: () => void
}

export function MainTable({ selectedMonth, selectedItem, onItemSelect, onMobileMenuOpen }: MainTableProps) {
  const items = useAppStore((state) => state.items)
  const itemDetails = useAppStore((state) => state.itemDetails)
  const deleteItem = useAppStore((state) => state.deleteItem)
  const [isNewItemDialogOpen, setIsNewItemDialogOpen] = useState(false)

  const getKindIcon = (kind: ContentKind) => {
    switch (kind) {
      case 'book':
        return <Book size={12} className="text-cyan-300" />
      case 'video':
        return <Video size={12} className="text-blue-300" />
      case 'article':
        return <FileText size={12} className="text-sky-300" />
    }
  }

  const getStatusBadge = (status: ContentStatus) => {
    const styles = {
      done: 'bg-cyan-900/70 text-cyan-100 border-cyan-600/50',
      in_progress: 'bg-blue-900/70 text-blue-100 border-blue-600/50',
      planned: 'bg-slate-800/70 text-slate-100 border-slate-600/50'
    }

    const labels = {
      done: '完了',
      in_progress: '進行中',
      planned: '予定'
    }

    return (
      <span className={`px-1 py-0.5 text-xs font-semibold rounded border ${styles[status]} backdrop-blur-sm leading-none`}>
        {labels[status]}
      </span>
    )
  }

  const renderRating = (rating?: number) => {
    if (!rating) return <span className="text-slate-500 text-xs font-medium">-</span>
    
    return (
      <div className="flex items-center gap-0.5">
        <Star size={8} className="text-yellow-300 fill-current" />
        <span className="text-xs font-bold text-white leading-none">{rating}/10</span>
      </div>
    )
  }

  const renderTags = (tags: string[]) => {
    const displayTags = tags.slice(0, 3)
    const remainingCount = Math.max(0, tags.length - 3)

    return (
      <div className="flex items-center gap-0.5 flex-wrap">
        {displayTags.map((tag, index) => (
          <span 
            key={index}
            className="px-1 py-0.5 text-xs bg-gradient-to-r from-cyan-900/60 to-blue-900/60 text-cyan-100 rounded border border-cyan-500/40 font-semibold backdrop-blur-sm leading-none"
          >
            {tag}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-1 py-0.5 text-xs bg-slate-800/60 text-slate-200 rounded border border-slate-600/40 font-semibold leading-none">
            +{remainingCount}
          </span>
        )}
      </div>
    )
  }

  const renderMemoIndicator = (itemId: string) => {
    const details = itemDetails[itemId]
    if (!details) return null
    
    const ideaCount = details.workIdeas.length
    const learningCount = details.learnings.length
    
    if (ideaCount === 0 && learningCount === 0) return null
    
    return (
      <div className="flex items-center gap-0.5">
        {ideaCount > 0 && (
          <span className="px-1 py-0.5 text-xs bg-cyan-900/70 text-cyan-100 rounded border border-cyan-600/50 font-bold min-w-[18px] text-center leading-none">
            {ideaCount}
          </span>
        )}
        {learningCount > 0 && (
          <span className="px-1 py-0.5 text-xs bg-blue-900/70 text-blue-100 rounded border border-blue-600/50 font-bold min-w-[18px] text-center leading-none">
            {learningCount}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 lg:p-6 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuOpen}
              className="md:hidden lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
              aria-label="メニューを開く"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl lg:text-2xl font-bold">学習記録</h1>
          </div>
          <button
            onClick={() => setIsNewItemDialogOpen(true)}
            className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2 gradient-accent text-white rounded-xl hover:opacity-90 transition-opacity text-sm lg:text-base"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">新規追加</span>
            <span className="sm:hidden">追加</span>
          </button>
        </div>
        <p className="text-foreground opacity-70 text-sm lg:text-base">
          {selectedMonth === 'uncategorized' ? '未分類のアイテム' : `${selectedMonth.replace('-', '年')}月の記録`}
        </p>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto">
        <div className="min-w-full">
          {/* Table Body */}
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div 
                key={item.id}
                className={`flex items-center gap-1 lg:gap-2 px-2 py-2 lg:py-1 hover:bg-card transition-colors group cursor-pointer ${
                  selectedItem === item.id ? 'bg-card ring-1 ring-cyan-400 ring-opacity-40' : ''
                }`}
                onDoubleClick={() => {
                  onItemSelect(item.id)
                }}
                onClick={() => {
                  // モバイルとタブレットでは1タップで詳細を開く
                  if (window.innerWidth < 768) {
                    onItemSelect(item.id)
                  }
                }}
              >
                {/* Kind Icon */}
                <div className="flex-shrink-0">
                  {getKindIcon(item.kind)}
                </div>

                {/* Title & Creators */}
                <div className="flex-1 min-w-0 max-w-xs lg:max-w-sm">
                  <div className="font-bold text-white text-xs lg:text-sm truncate leading-none">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 font-medium truncate leading-none md:block lg:block hidden">
                    {item.creators.join(', ')}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex-shrink-0">
                  {renderRating(item.rating)}
                </div>

                {/* Status */}
                <div className="flex-shrink-0">
                  {getStatusBadge(item.status)}
                </div>

                {/* One-liner */}
                <div className="flex-1 min-w-0 max-w-sm hidden md:block lg:block">
                  <p className="text-xs text-slate-200 font-medium truncate leading-none">
                    {item.oneLiner || '—'}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex-shrink-0 max-w-xs hidden md:block lg:block">
                  {renderTags(item.tags)}
                </div>

                {/* Memo Indicator */}
                <div className="flex-shrink-0">
                  {renderMemoIndicator(item.id)}
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onItemSelect(selectedItem === item.id ? null : item.id)
                    }}
                    className="p-1 lg:p-0.5 hover:bg-cyan-900/50 rounded opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                    title="詳細表示"
                  >
                    <ExternalLink size={12} className="text-cyan-300 lg:w-2 lg:h-2" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (confirm(`「${item.title}」を削除しますか？`)) {
                        if (selectedItem === item.id) {
                          onItemSelect(null)
                        }
                        deleteItem(item.id)
                      }
                    }}
                    className="p-1 lg:p-0.5 hover:bg-red-900/50 rounded text-red-300 hover:text-red-200 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                    title="削除"
                  >
                    <Trash2 size={12} className="lg:w-2 lg:h-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Item Dialog */}
      <NewItemDialog
        isOpen={isNewItemDialogOpen}
        onClose={() => setIsNewItemDialogOpen(false)}
      />
    </div>
  )
}