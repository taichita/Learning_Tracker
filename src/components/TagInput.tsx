'use client'

import { useState, useRef, useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

interface TagInputProps {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
}

export function TagInput({ value, onChange, className = '', placeholder = '' }: TagInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const items = useAppStore((state) => state.items)

  // Get all unique tags from existing items
  const getAllTags = () => {
    const allTags = new Set<string>()
    items.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.trim()) {
          allTags.add(tag.trim())
        }
      })
    })
    return Array.from(allTags).sort()
  }

  // Get current tag being typed
  const getCurrentTag = () => {
    const cursorPos = inputRef.current?.selectionStart || 0
    const beforeCursor = value.slice(0, cursorPos)
    const lastComma = beforeCursor.lastIndexOf(',')
    return beforeCursor.slice(lastComma + 1).trim()
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)

    const currentTag = getCurrentTag()
    if (currentTag.length >= 1) { // Show suggestions after 1 character
      const allTags = getAllTags()
      const existingTags = value.split(',').map(tag => tag.trim()).filter(Boolean)
      
      const suggestions = allTags.filter(tag => 
        tag.toLowerCase().includes(currentTag.toLowerCase()) &&
        !existingTags.includes(tag)
      ).slice(0, 10)

      setFilteredSuggestions(suggestions)
      setShowSuggestions(suggestions.length > 0)
      setSelectedSuggestion(-1)
    } else {
      setShowSuggestions(false)
    }
  }

  // Handle key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedSuggestion(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedSuggestion(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        )
        break
      case 'Tab':
      case 'Enter':
        if (selectedSuggestion >= 0) {
          e.preventDefault()
          selectSuggestion(filteredSuggestions[selectedSuggestion])
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setSelectedSuggestion(-1)
        break
    }
  }

  // Select a suggestion
  const selectSuggestion = (suggestion: string) => {
    const cursorPos = inputRef.current?.selectionStart || 0
    const beforeCursor = value.slice(0, cursorPos)
    const afterCursor = value.slice(cursorPos)
    const lastComma = beforeCursor.lastIndexOf(',')
    
    const newValue = beforeCursor.slice(0, lastComma + 1) + 
                     (lastComma >= 0 ? ' ' : '') + 
                     suggestion + 
                     afterCursor

    onChange(newValue)
    setShowSuggestions(false)
    setSelectedSuggestion(-1)

    // Focus back to input and position cursor after the inserted tag
    setTimeout(() => {
      if (inputRef.current) {
        const newCursorPos = lastComma + 1 + (lastComma >= 0 ? 1 : 0) + suggestion.length
        inputRef.current.focus()
        inputRef.current.setSelectionRange(newCursorPos, newCursorPos)
      }
    }, 0)
  }

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            const currentTag = getCurrentTag()
            if (currentTag) {
              const syntheticEvent = { target: { value } } as React.ChangeEvent<HTMLInputElement>
              handleInputChange(syntheticEvent)
            }
          }}
          className={className}
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
      
      {/* Tag deletion interface */}
      {value && value.includes(',') && (
        <div className="mt-2 flex flex-wrap gap-2">
          {value.split(',').map((tag, index) => {
            const trimmedTag = tag.trim()
            if (!trimmedTag) return null
            return (
              <div key={index} className="flex items-center gap-1 px-2 py-1 bg-accent-purple bg-opacity-20 text-accent-purple rounded-lg text-sm">
                <span>{trimmedTag}</span>
                <button
                  type="button"
                  onClick={() => {
                    const tags = value.split(',').map(t => t.trim()).filter(Boolean)
                    tags.splice(index, 1)
                    onChange(tags.join(', '))
                  }}
                  className="hover:bg-red-500/20 rounded-full p-0.5 transition-colors"
                  title="タグを削除"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      )}
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => selectSuggestion(suggestion)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-card transition-colors ${
                index === selectedSuggestion
                  ? 'bg-accent-purple bg-opacity-20 text-cyan-300'
                  : 'text-foreground'
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}