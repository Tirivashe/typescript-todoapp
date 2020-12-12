import { configureStore,  } from "@reduxjs/toolkit"
import { todos } from "./slices/todoSlice"


export const store = configureStore({
  reducer: {
    todos: todos.reducer
  }
})