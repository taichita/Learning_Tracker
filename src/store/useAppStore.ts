'use client'

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'
import { ContentItem, ItemDetails, AppState, BulletPoint, BusinessMemoItem, LifeMemoItem } from '@/types'

interface AppStoreState extends AppState {
  // Actions
  addItem: (item: ContentItem) => void
  updateItem: (id: string, updates: Partial<ContentItem>) => void
  deleteItem: (id: string) => void
  
  // Item Details Actions
  updateItemDetails: (itemId: string, details: Partial<ItemDetails>) => void
  addWorkIdea: (itemId: string, text: string) => void
  updateWorkIdea: (itemId: string, ideaId: string, updates: Partial<BulletPoint>) => void
  deleteWorkIdea: (itemId: string, ideaId: string) => void
  reorderWorkIdeas: (itemId: string, from: number, to: number) => void
  
  addLearning: (itemId: string, text: string) => void
  updateLearning: (itemId: string, learningId: string, updates: Partial<BulletPoint>) => void
  deleteLearning: (itemId: string, learningId: string) => void
  reorderLearnings: (itemId: string, from: number, to: number) => void
  
  // Business and Life Memo Actions
  updateBusinessMemos: (itemId: string, memos: BusinessMemoItem[]) => void
  updateLifeMemos: (itemId: string, memos: LifeMemoItem[]) => void
  
  // UI State Actions
  setSelectedItem: (itemId: string | null) => void
  setSelectedMonth: (month: string) => void
  
  // Undo/Redo Actions
  undo: () => void
  redo: () => void
  canUndo: () => boolean
  canRedo: () => boolean
  
  // Helper to create undoable actions
  executeUndoable: (action: () => void, inverse: () => void) => void
}


const generateId = () => Math.random().toString(36).substr(2, 9)

// Local storage key
const STORAGE_KEY = 'learning-tracker-data'

// Migrate old string memo format to new array format
const migrateMemoFormat = (item: any) => {
  if (typeof item.businessMemo === 'string') {
    const text = item.businessMemo.trim()
    item.businessMemo = text ? [{
      id: generateId(),
      text,
      order: 0,
      createdAt: new Date().toISOString()
    }] : []
  }
  if (typeof item.lifeMemo === 'string') {
    const text = item.lifeMemo.trim()
    item.lifeMemo = text ? [{
      id: generateId(),
      text,
      order: 0,
      createdAt: new Date().toISOString()
    }] : []
  }
  return item
}

// Load initial state from localStorage
const loadFromStorage = () => {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    
    const data = JSON.parse(stored)
    // Migrate old format to new format
    if (data.items) {
      data.items = data.items.map(migrateMemoFormat)
    }
    return data
  } catch (error) {
    console.error('Failed to load from localStorage:', error)
    return null
  }
}

// Save state to localStorage
const saveToStorage = (state: { items: ContentItem[], itemDetails: Record<string, ItemDetails> }) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Failed to save to localStorage:', error)
  }
}

export const useAppStore = create<AppStoreState>()(
  subscribeWithSelector(
    immer((set, get) => {
      const storedData = loadFromStorage()
      
      return {
      // Initial State - load from storage if available
      items: storedData?.items || [],
      itemDetails: storedData?.itemDetails || {},
      selectedMonth: (() => {
        const now = new Date()
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
      })(),
      selectedItem: null,
      undoStack: [],
      redoStack: [],

      // Item Actions
      addItem: (item) => {
        const action = () => {
          set((state) => {
            const newItem = { 
              ...item, 
              id: generateId(),
              businessMemo: item.businessMemo || [],
              lifeMemo: item.lifeMemo || []
            }
            state.items.push(newItem)
          })
        }
        
        const inverse = () => {
          set((state) => {
            const index = state.items.findIndex(i => i.id === item.id)
            if (index >= 0) {
              state.items.splice(index, 1)
            }
          })
        }
        
        get().executeUndoable(action, inverse)
      },

      updateItem: (id, updates) => {
        const currentItem = get().items.find(item => item.id === id)
        if (!currentItem) return

        const action = () => {
          set((state) => {
            const item = state.items.find(i => i.id === id)
            if (item) {
              Object.assign(item, updates)
              item.updatedAt = new Date().toISOString()
            }
          })
        }

        const inverse = () => {
          set((state) => {
            const item = state.items.find(i => i.id === id)
            if (item) {
              Object.assign(item, currentItem)
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      deleteItem: (id) => {
        const itemToDelete = get().items.find(item => item.id === id)
        const detailsToDelete = get().itemDetails[id]
        if (!itemToDelete) return

        const action = () => {
          set((state) => {
            const index = state.items.findIndex(i => i.id === id)
            if (index >= 0) {
              state.items.splice(index, 1)
            }
            delete state.itemDetails[id]
          })
        }

        const inverse = () => {
          set((state) => {
            state.items.push(itemToDelete)
            if (detailsToDelete) {
              state.itemDetails[id] = detailsToDelete
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      // Item Details Actions
      updateItemDetails: (itemId, details) => {
        const currentDetails = get().itemDetails[itemId]

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) {
              state.itemDetails[itemId] = {
                id: generateId(),
                itemId,
                workIdeas: [],
                learnings: [],
                longNote: '',
                highlights: [],
                links: [],
                version: 1,
                updatedAt: new Date().toISOString()
              }
            }
            Object.assign(state.itemDetails[itemId], details)
            state.itemDetails[itemId].updatedAt = new Date().toISOString()
            state.itemDetails[itemId].version += 1
          })
        }

        const inverse = () => {
          set((state) => {
            if (currentDetails) {
              state.itemDetails[itemId] = currentDetails
            } else {
              delete state.itemDetails[itemId]
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      addWorkIdea: (itemId, text) => {
        const newIdea = {
          id: generateId(),
          text,
          checked: false,
          order: get().itemDetails[itemId]?.workIdeas.length || 0
        }

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            state.itemDetails[itemId].workIdeas.push(newIdea)
            state.itemDetails[itemId].updatedAt = new Date().toISOString()
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const index = state.itemDetails[itemId].workIdeas.findIndex(i => i.id === newIdea.id)
            if (index >= 0) {
              state.itemDetails[itemId].workIdeas.splice(index, 1)
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      updateWorkIdea: (itemId, ideaId, updates) => {
        const currentIdea = get().itemDetails[itemId]?.workIdeas.find(i => i.id === ideaId)
        if (!currentIdea) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const idea = state.itemDetails[itemId].workIdeas.find(i => i.id === ideaId)
            if (idea) {
              Object.assign(idea, updates)
              state.itemDetails[itemId].updatedAt = new Date().toISOString()
            }
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const idea = state.itemDetails[itemId].workIdeas.find(i => i.id === ideaId)
            if (idea) {
              Object.assign(idea, currentIdea)
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      deleteWorkIdea: (itemId, ideaId) => {
        const ideaToDelete = get().itemDetails[itemId]?.workIdeas.find(i => i.id === ideaId)
        if (!ideaToDelete) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const index = state.itemDetails[itemId].workIdeas.findIndex(i => i.id === ideaId)
            if (index >= 0) {
              state.itemDetails[itemId].workIdeas.splice(index, 1)
              state.itemDetails[itemId].updatedAt = new Date().toISOString()
            }
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            state.itemDetails[itemId].workIdeas.push(ideaToDelete)
          })
        }

        get().executeUndoable(action, inverse)
      },

      reorderWorkIdeas: (itemId, from, to) => {
        const ideas = get().itemDetails[itemId]?.workIdeas
        if (!ideas || from === to) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const ideas = state.itemDetails[itemId].workIdeas
            const [movedIdea] = ideas.splice(from, 1)
            ideas.splice(to, 0, movedIdea)
            
            // Update order values
            ideas.forEach((idea, index) => {
              idea.order = index
            })
            
            state.itemDetails[itemId].updatedAt = new Date().toISOString()
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const ideas = state.itemDetails[itemId].workIdeas
            const [movedIdea] = ideas.splice(to, 1)
            ideas.splice(from, 0, movedIdea)
            
            // Restore order values
            ideas.forEach((idea, index) => {
              idea.order = index
            })
          })
        }

        get().executeUndoable(action, inverse)
      },

      // Similar implementations for learnings
      addLearning: (itemId, text) => {
        const newLearning = {
          id: generateId(),
          text,
          order: get().itemDetails[itemId]?.learnings.length || 0
        }

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            state.itemDetails[itemId].learnings.push(newLearning)
            state.itemDetails[itemId].updatedAt = new Date().toISOString()
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const index = state.itemDetails[itemId].learnings.findIndex(i => i.id === newLearning.id)
            if (index >= 0) {
              state.itemDetails[itemId].learnings.splice(index, 1)
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      updateLearning: (itemId, learningId, updates) => {
        const currentLearning = get().itemDetails[itemId]?.learnings.find(l => l.id === learningId)
        if (!currentLearning) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const learning = state.itemDetails[itemId].learnings.find(l => l.id === learningId)
            if (learning) {
              Object.assign(learning, updates)
              state.itemDetails[itemId].updatedAt = new Date().toISOString()
            }
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const learning = state.itemDetails[itemId].learnings.find(l => l.id === learningId)
            if (learning) {
              Object.assign(learning, currentLearning)
            }
          })
        }

        get().executeUndoable(action, inverse)
      },

      deleteLearning: (itemId, learningId) => {
        const learningToDelete = get().itemDetails[itemId]?.learnings.find(l => l.id === learningId)
        if (!learningToDelete) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const index = state.itemDetails[itemId].learnings.findIndex(l => l.id === learningId)
            if (index >= 0) {
              state.itemDetails[itemId].learnings.splice(index, 1)
              state.itemDetails[itemId].updatedAt = new Date().toISOString()
            }
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            state.itemDetails[itemId].learnings.push(learningToDelete)
          })
        }

        get().executeUndoable(action, inverse)
      },

      reorderLearnings: (itemId, from, to) => {
        const learnings = get().itemDetails[itemId]?.learnings
        if (!learnings || from === to) return

        const action = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const learnings = state.itemDetails[itemId].learnings
            const [movedLearning] = learnings.splice(from, 1)
            learnings.splice(to, 0, movedLearning)
            
            // Update order values
            learnings.forEach((learning, index) => {
              learning.order = index
            })
            
            state.itemDetails[itemId].updatedAt = new Date().toISOString()
          })
        }

        const inverse = () => {
          set((state) => {
            if (!state.itemDetails[itemId]) return
            const learnings = state.itemDetails[itemId].learnings
            const [movedLearning] = learnings.splice(to, 1)
            learnings.splice(from, 0, movedLearning)
            
            // Restore order values
            learnings.forEach((learning, index) => {
              learning.order = index
            })
          })
        }

        get().executeUndoable(action, inverse)
      },

      // UI State Actions
      setSelectedItem: (itemId) => {
        set((state) => {
          state.selectedItem = itemId
        })
      },

      setSelectedMonth: (month) => {
        set((state) => {
          state.selectedMonth = month
        })
      },

      // Undo/Redo Actions
      executeUndoable: (action) => {
        set((state) => {
          // Save current state for undo
          state.undoStack.push(JSON.parse(JSON.stringify({
            items: state.items,
            itemDetails: state.itemDetails
          })))
          
          // Clear redo stack when new action is performed
          state.redoStack = []
          
          // Limit undo stack size
          if (state.undoStack.length > 100) {
            state.undoStack.shift()
          }
        })
        
        action()
        
        // Save to localStorage after action
        const currentState = get()
        saveToStorage({
          items: currentState.items,
          itemDetails: currentState.itemDetails
        })
      },

      undo: () => {
        const state = get()
        if (state.undoStack.length === 0) return

        set((currentState) => {
          // Save current state to redo stack
          currentState.redoStack.push(JSON.parse(JSON.stringify({
            items: currentState.items,
            itemDetails: currentState.itemDetails
          })))
          
          // Restore previous state
          const previousState = currentState.undoStack.pop()!
          currentState.items = previousState.items
          currentState.itemDetails = previousState.itemDetails
        })

        // Save to localStorage after undo
        const currentState = get()
        saveToStorage({
          items: currentState.items,
          itemDetails: currentState.itemDetails
        })
      },

      redo: () => {
        const state = get()
        if (state.redoStack.length === 0) return

        set((currentState) => {
          // Save current state to undo stack
          currentState.undoStack.push(JSON.parse(JSON.stringify({
            items: currentState.items,
            itemDetails: currentState.itemDetails
          })))
          
          // Restore next state
          const nextState = currentState.redoStack.pop()!
          currentState.items = nextState.items
          currentState.itemDetails = nextState.itemDetails
        })

        // Save to localStorage after redo
        const currentState = get()
        saveToStorage({
          items: currentState.items,
          itemDetails: currentState.itemDetails
        })
      },

      canUndo: () => get().undoStack.length > 0,
      canRedo: () => get().redoStack.length > 0,

      // Business and Life Memo Actions
      updateBusinessMemos: (itemId, memos) => {
        const action = () => {
          set((state) => {
            const item = state.items.find(i => i.id === itemId)
            if (item) {
              item.businessMemo = memos
              item.updatedAt = new Date().toISOString()
            }
          })
        }

        get().executeUndoable(action)
      },

      updateLifeMemos: (itemId, memos) => {
        const action = () => {
          set((state) => {
            const item = state.items.find(i => i.id === itemId)
            if (item) {
              item.lifeMemo = memos
              item.updatedAt = new Date().toISOString()
            }
          })
        }

        get().executeUndoable(action)
      },
      }
    })
  )
)