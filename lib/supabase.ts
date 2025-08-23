import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types
export interface Database {
  public: {
    Tables: {
      content_items: {
        Row: {
          id: string
          user_id: string
          kind: 'book' | 'video' | 'article'
          title: string
          creators: string[]
          url: string | null
          date: string | null
          amazon_url: string | null
          notebooklm_url: string | null
          rating: number | null
          one_liner: string | null
          business_memo: BusinessMemoItem[]
          life_memo: LifeMemoItem[]
          tags: string[]
          status: 'planned' | 'in_progress' | 'done'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          kind: 'book' | 'video' | 'article'
          title: string
          creators: string[]
          url?: string | null
          date?: string | null
          amazon_url?: string | null
          notebooklm_url?: string | null
          rating?: number | null
          one_liner?: string | null
          business_memo?: BusinessMemoItem[]
          life_memo?: LifeMemoItem[]
          tags: string[]
          status: 'planned' | 'in_progress' | 'done'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          kind?: 'book' | 'video' | 'article'
          title?: string
          creators?: string[]
          url?: string | null
          date?: string | null
          amazon_url?: string | null
          notebooklm_url?: string | null
          rating?: number | null
          one_liner?: string | null
          business_memo?: BusinessMemoItem[]
          life_memo?: LifeMemoItem[]
          tags?: string[]
          status?: 'planned' | 'in_progress' | 'done'
          created_at?: string
          updated_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export interface BusinessMemoItem {
  id: string
  text: string
  order: number
  createdAt: string
}

export interface LifeMemoItem {
  id: string
  text: string
  order: number
  createdAt: string
}