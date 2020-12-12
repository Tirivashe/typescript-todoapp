import { Button, CssBaseline, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../redux/slices/todoSlice'
import TodoItem from '../todoItem/TodoItem'
import { useStyles } from './styles'


function TodoList() {
  const history = useHistory()
  const classes = useStyles()
  const todos = useSelector((state: State) => state.todos)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column" spacing={3}>
        {todos.map(todo => (
          <Grid item key={todo.id}>
            <TodoItem todo={todo}/>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" className={classes.button} onClick={()=> history.push('/create')}>Create To-do</Button>
    </div>
  )
}

export default TodoList
