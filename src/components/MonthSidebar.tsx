'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { AuthButton } from './AuthButton'

interface MonthSidebarProps {
  selectedMonth: string
  onMonthSelect: (month: string) => void
  onMobileClose?: () => void
}

export function MonthSidebar({ selectedMonth, onMonthSelect, onMobileClose }: MonthSidebarProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const months = [
    '1月', '2月', '3月', '4月', '5月', '6月',
    '7月', '8月', '9月', '10月', '11月', '12月'
  ]

  const handleMonthClick = (monthIndex: number) => {
    const monthStr = `${currentYear}-${String(monthIndex + 1).padStart(2, '0')}`
    onMonthSelect(monthStr)
    onMobileClose?.() // モバイルでは選択後にサイドバーを閉じる
  }

  const handlePrevYear = () => setCurrentYear(currentYear - 1)
  const handleNextYear = () => setCurrentYear(currentYear + 1)

  const isSelectedMonth = (monthIndex: number) => {
    const monthStr = `${currentYear}-${String(monthIndex + 1).padStart(2, '0')}`
    return selectedMonth === monthStr
  }

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      {/* Year Navigation */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={handlePrevYear}
            className="p-2 hover:bg-background rounded-lg transition-colors "
            aria-label="前年"
          >
            <ChevronLeft size={16} />
          </button>
          <h2 className="text-lg font-semibold text-center min-w-0 ">
            {currentYear}年
          </h2>
          <button 
            onClick={handleNextYear}
            className="p-2 hover:bg-background rounded-lg transition-colors "
            aria-label="次年"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Month List */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => handleMonthClick(index)}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
                isSelectedMonth(index)
                  ? 'gradient-accent text-white shadow-lg'
                  : 'hover:bg-background border border-transparent hover:border-border '
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar size={16} className="opacity-70" />
                <span className="font-medium">{month}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Uncategorized Section */}
        <div className="mt-8 pt-4 border-t border-border">
          <button
            onClick={() => {
              onMonthSelect('uncategorized')
              onMobileClose?.()
            }}
            className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
              selectedMonth === 'uncategorized'
                ? 'gradient-accent text-white shadow-lg'
                : 'hover:bg-background border border-transparent hover:border-border '
            }`}
          >
            <div className="flex items-center gap-3">
              <Calendar size={16} className="opacity-70" />
              <span className="font-medium">未分類</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Auth section at bottom */}
      <div className="mt-auto border-t border-border">
        <AuthButton />
      </div>
    </div>
  )
}