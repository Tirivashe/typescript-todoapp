import { makeStyles } from '@material-ui/core'
import { TodoItemProps } from './TodoItem'

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: ".25rem 15px .25rem 15px"
  },

  container: {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },

  desc: {
    textDecoration: ({ todo }: TodoItemProps) => todo.completed ? "line-through" : ""
  }
}))