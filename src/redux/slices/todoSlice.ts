import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Todo{
  id: number;
  description: string;
  completed: boolean
}

export interface State{
  todos: Todo[]
}

const initialState: Todo[] = [
  {
    id: 1,
    description: "Take out the trash",
    completed: false
  },
  {
    id: 2,
    description: "Run the dishwasher",
    completed: false
  },
  {
    id: 3,
    description: "Water the garden",
    completed: false
  }
]

let length = initialState.length

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, { payload }: PayloadAction<{id: number, description: string, completed: boolean }>) => {
        state.push(payload)
        length++
      },
      prepare: ({ description }: { description: string }) => ({
        payload: {
          id: length,
          description,
          completed: false
        }
      })
    },

    editTodo: (state, { payload }: PayloadAction<Todo>) => {
      const todoToEditIndex = state.findIndex(todo => todo.id === payload.id)
      state[todoToEditIndex].description = payload.description
      state[todoToEditIndex].completed = payload.completed
    },

    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      const todoToDeleteIndex = state.findIndex(todo => todo.id === payload)
      state.splice(todoToDeleteIndex, 1)
    },

    toggleTodo: (state, { payload }: PayloadAction<number>) => {
      const todoToToggleIndex = state.findIndex(todo => todo.id === payload)
      state[todoToToggleIndex].completed = !state[todoToToggleIndex].completed
    }
  }
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todos.actions