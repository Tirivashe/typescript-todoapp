import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Paper, IconButton, Checkbox } from '@material-ui/core'
import { useStyles } from './styles'
import { Edit, Delete } from '@material-ui/icons'

import { Todo, deleteTodo, toggleTodo } from '../../redux/slices/todoSlice'


export interface TodoItemProps{
  todo: Todo
}

function TodoItem({ todo } : TodoItemProps) {
  const dispatch = useDispatch()
  const classes = useStyles({ todo })
  return (
      <Paper className={classes.paper}>
        <div className={classes.container}>
          <div className={classes.container}>
            <Checkbox checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
            <h3 className={classes.desc}>{todo.description}</h3>
          </div>
          <div className={classes.container}>
            <Link to={`/edit/${todo.id}` }>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
            <IconButton color="secondary" onClick={()=> dispatch(deleteTodo(todo.id))}>
              <Delete/>
            </IconButton>
          </div>
        </div>
      </Paper>
  )
}

export default TodoItem