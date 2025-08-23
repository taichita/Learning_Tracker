export type ContentKind = 'book' | 'video' | 'article'
export type ContentStatus = 'planned' | 'in_progress' | 'done'

export interface ContentItem {
  id: string
  userId: string
  kind: ContentKind
  title: string
  creators: string[]
  url?: string
  date?: string
  amazonUrl?: string
  notebooklmUrl?: string
  rating?: number
  oneLiner?: string
  businessMemo?: BusinessMemoItem[] // 企画に生かせそうな内容のメモ（配列形式）
  lifeMemo?: LifeMemoItem[]         // 人生において生かせそうなエッセンスのメモ（配列形式）
  tags: string[]
  status: ContentStatus
  createdAt: string
  updatedAt: string
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

export interface BulletPoint {
  id: string
  text: string
  checked?: boolean
  order: number
}

export interface Highlight {
  id: string
  quote: string
  note?: string
  source?: string
  timestamp?: string
}

export interface Link {
  label: string
  url: string
}

export interface ItemDetails {
  id: string
  itemId: string
  workIdeas: BulletPoint[]
  learnings: BulletPoint[]
  longNote: string
  highlights: Highlight[]
  links: Link[]
  version: number
  updatedAt: string
}

export interface ActivityLog {
  id: string
  userId: string
  itemId: string
  opType: 'create' | 'update' | 'delete' | 'reorder' | 'bulk_edit'
  payload: Record<string, unknown>
  timestamp: string
}

export interface AppState {
  items: ContentItem[]
  itemDetails: Record<string, ItemDetails>
  selectedMonth: string
  selectedItem: string | null
  undoStack: AppState[]
  redoStack: AppState[]
}

export interface UndoableAction {
  type: string
  payload: unknown
  inverse: UndoableAction
}