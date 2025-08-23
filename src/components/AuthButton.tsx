'use client'

import { useAuth } from '../hooks/useAuth'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../lib/supabase'

export function AuthButton() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.user_metadata?.full_name || user.email}
          </p>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
        </div>
        <button
          onClick={signOut}
          className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
        >
          サインアウト
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">
        学習記録を同期するためにログインしてください
      </h2>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#2563eb',
                brandAccent: '#1d4ed8',
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: 'メールアドレス',
              password_label: 'パスワード',
              button_label: 'サインイン',
              loading_button_label: 'サインイン中...',
              social_provider_text: '{{provider}}でサインイン',
              link_text: 'すでにアカウントをお持ちですか？',
            },
            sign_up: {
              email_label: 'メールアドレス',
              password_label: 'パスワード',
              button_label: 'サインアップ',
              loading_button_label: 'サインアップ中...',
              social_provider_text: '{{provider}}でサインアップ',
              link_text: 'アカウントをお持ちでない方は？',
              confirmation_text: 'メールアドレスに確認リンクを送信しました',
            },
            forgotten_password: {
              email_label: 'メールアドレス',
              button_label: 'パスワードリセットメールを送信',
              loading_button_label: '送信中...',
              link_text: 'パスワードを忘れた方は？',
              confirmation_text: 'パスワードリセットメールを送信しました',
            },
          },
        }}
        providers={[]}
        redirectTo={`${window.location.origin}`}
      />
    </div>
  )
}