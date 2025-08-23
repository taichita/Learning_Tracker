'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Search, 
  Plus, 
  Calendar, 
  Download, 
  Upload, 
  Palette, 
  Command
} from 'lucide-react'

interface Command {
  id: string
  label: string
  description?: string
  icon: React.ReactNode
  action: () => void
  keywords?: string[]
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  onNewItem?: () => void
}

export function CommandPalette({ isOpen, onClose, onNewItem }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const commands: Command[] = [
    {
      id: 'new-item',
      label: '新規学習記録を追加',
      description: '書籍・動画・記事の学習記録を作成します',
      icon: <Plus size={16} className="text-blue-400" />,
      action: () => {
        onNewItem?.()
        onClose()
      },
      keywords: ['新規', '追加', 'add', '書籍', '動画', '記事', 'book', 'video', 'article']
    },
    {
      id: 'search',
      label: '検索',
      description: '学習記録を検索します',
      icon: <Search size={16} className="text-gray-400" />,
      action: () => {
        console.log('検索')
        onClose()
      },
      keywords: ['検索', 'search', '探す']
    },
    {
      id: 'jump-current-month',
      label: '今月にジャンプ',
      description: '現在の月の記録を表示します',
      icon: <Calendar size={16} className="text-purple-400" />,
      action: () => {
        console.log('今月にジャンプ')
        onClose()
      },
      keywords: ['今月', 'current', 'month', 'ジャンプ', 'jump']
    },
    {
      id: 'jump-january',
      label: '1月にジャンプ',
      icon: <Calendar size={16} className="text-purple-400" />,
      action: () => {
        console.log('1月にジャンプ')
        onClose()
      },
      keywords: ['1月', 'january', '一月', 'ジャンプ', 'jump']
    },
    {
      id: 'jump-february',
      label: '2月にジャンプ',
      icon: <Calendar size={16} className="text-purple-400" />,
      action: () => {
        console.log('2月にジャンプ')
        onClose()
      },
      keywords: ['2月', 'february', '二月', 'ジャンプ', 'jump']
    },
    {
      id: 'jump-march',
      label: '3月にジャンプ',
      icon: <Calendar size={16} className="text-purple-400" />,
      action: () => {
        console.log('3月にジャンプ')
        onClose()
      },
      keywords: ['3月', 'march', '三月', 'ジャンプ', 'jump']
    },
    {
      id: 'export',
      label: 'データをエクスポート',
      description: 'JSON形式でデータを書き出します',
      icon: <Download size={16} className="text-green-400" />,
      action: () => {
        console.log('エクスポート')
        onClose()
      },
      keywords: ['エクスポート', 'export', '書き出し', 'download']
    },
    {
      id: 'import',
      label: 'データをインポート',
      description: 'JSON形式のデータを読み込みます',
      icon: <Upload size={16} className="text-blue-400" />,
      action: () => {
        console.log('インポート')
        onClose()
      },
      keywords: ['インポート', 'import', '読み込み', 'upload']
    },
    {
      id: 'theme-toggle',
      label: 'テーマ切替',
      description: 'ダークテーマとライトテーマを切り替えます',
      icon: <Palette size={16} className="text-yellow-400" />,
      action: () => {
        console.log('テーマ切替')
        onClose()
      },
      keywords: ['テーマ', 'theme', '切替', 'toggle', 'ダーク', 'dark', 'ライト', 'light']
    }
  ]

  const filteredCommands = query
    ? commands.filter(command => {
        const searchTerms = query.toLowerCase().split(' ')
        return searchTerms.every(term =>
          command.label.toLowerCase().includes(term) ||
          command.description?.toLowerCase().includes(term) ||
          command.keywords?.some(keyword => keyword.toLowerCase().includes(term))
        )
      })
    : commands

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-4 lg:pt-[10vh] px-2 lg:px-4">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] lg:max-h-none">
        {/* Header */}
        <div className="p-3 lg:p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500">
              <Command size={16} />
              <span className="text-sm">コマンドパレット</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <Search size={16} className="text-gray-500" />
            <input
              ref={inputRef}
              type="text"
              placeholder="コマンドを検索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder-gray-500 outline-none text-base lg:text-lg"
            />
          </div>
        </div>

        {/* Commands List */}
        <div 
          ref={listRef}
          className="max-h-80 lg:max-h-96 overflow-y-auto"
        >
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <button
                key={command.id}
                onClick={command.action}
                className={`w-full flex items-center gap-3 lg:gap-4 p-3 lg:p-4 text-left hover:bg-background transition-colors ${
                  index === selectedIndex ? 'bg-background' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  {command.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground">
                    {command.label}
                  </div>
                  {command.description && (
                    <div className="text-xs lg:text-sm text-gray-500 truncate">
                      {command.description}
                    </div>
                  )}
                </div>
                {index === selectedIndex && (
                  <div className="text-xs text-gray-500 bg-background px-2 py-1 rounded border">
                    Enter
                  </div>
                )}
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search size={24} className="mx-auto mb-3 opacity-50" />
              <p>該当するコマンドが見つかりませんでした</p>
              <p className="text-sm mt-1">別のキーワードで検索してみてください</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2 lg:p-3 bg-background border-t border-border">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2 lg:gap-4 text-xs overflow-x-auto">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-xs">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-xs">↓</kbd>
                移動
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-xs">Enter</kbd>
                実行
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-xs">Esc</kbd>
                閉じる
              </span>
            </div>
            <span>{filteredCommands.length} 件</span>
          </div>
        </div>
      </div>
    </div>
  )
}