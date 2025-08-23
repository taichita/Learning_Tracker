import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learning Tracker - 読書・動画学習管理',
  description: '読書や動画学習を効率的に管理するアプリケーション',
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-background text-foreground font-serif antialiased">
        <div id="root" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}