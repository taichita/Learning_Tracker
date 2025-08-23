'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, ExternalLink, Book } from 'lucide-react'

interface AmazonSuggestionsProps {
  query: string
  onSelect: (item: AmazonItem) => void
  onClose: () => void
}

interface AmazonItem {
  title: string
  author: string
  url: string
  image?: string
  price?: string
}

// Generate Amazon search suggestions that link to real Amazon search pages
const generateAmazonSearchSuggestions = async (query: string): Promise<AmazonItem[]> => {
  // Simulate slight delay for UX
  await new Promise(resolve => setTimeout(resolve, 200))
  
  if (!query.trim() || query.length < 2) {
    return []
  }
  
  const suggestions: AmazonItem[] = [
    {
      title: `「${query}」で検索`,
      author: 'Amazon.co.jp',
      url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&ref=nb_sb_noss`,
      price: ''
    },
    {
      title: `「${query} 本」で検索`,
      author: 'Amazon.co.jp - 本',
      url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(query + ' 本')}&i=stripbooks&ref=nb_sb_noss`,
      price: ''
    },
    {
      title: `「${query} Kindle」で検索`, 
      author: 'Amazon.co.jp - Kindle',
      url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&i=digital-text&ref=nb_sb_noss`,
      price: ''
    }
  ]
  
  return suggestions
}

export function AmazonSuggestions({ query, onSelect, onClose }: AmazonSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<AmazonItem[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const searchAmazon = async () => {
      if (query.length < 2) {
        setSuggestions([])
        return
      }

      setLoading(true)
      try {
        const results = await generateAmazonSearchSuggestions(query)
        setSuggestions(results)
        setSelectedIndex(0)
      } catch (error) {
        console.error('Amazon search error:', error)
        setSuggestions([])
      } finally {
        setLoading(false)
      }
    }

    const debounceTimer = setTimeout(searchAmazon, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!suggestions.length) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : 0)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : suggestions.length - 1)
          break
        case 'Enter':
          e.preventDefault()
          if (suggestions[selectedIndex]) {
            onSelect(suggestions[selectedIndex])
          }
          break
        case 'Escape':
          onClose()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [suggestions, selectedIndex, onSelect, onClose])

  if (!query || query.length < 2) return null

  return (
    <div 
      ref={containerRef}
      className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-xl max-h-80 overflow-y-auto"
    >
      {loading ? (
        <div className="p-4 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <Search size={16} className="animate-spin" />
            Amazon で検索中...
          </div>
        </div>
      ) : suggestions.length > 0 ? (
        <div className="py-2">
          <div className="px-3 py-1 text-xs text-gray-500 border-b border-border bg-background">
            Amazon 検索結果
          </div>
          {suggestions.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className={`w-full text-left p-3 hover:bg-background transition-colors ${
                index === selectedIndex ? 'bg-background' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Book size={16} className="text-cyan-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm line-clamp-2 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    著者: {item.author}
                  </div>
                  {item.price && (
                    <div className="text-xs text-cyan-300 font-medium">
                      {item.price}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <ExternalLink size={12} className="text-gray-500" />
                </div>
              </div>
            </button>
          ))}
          <div className="px-3 py-2 text-xs text-gray-500 border-t border-border bg-background">
            ↑↓ で選択、Enter で決定、Esc で閉じる
          </div>
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <Search size={16} />
            「{query}」の検索結果が見つかりませんでした
          </div>
        </div>
      )}
    </div>
  )
}