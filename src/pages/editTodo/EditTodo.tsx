import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { State, editTodo } from '../../redux/slices/todoSlice'
import { useStyles } from './styles'
import { Button, Grid, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import { useState } from 'react'

function EditTodo() {
  const todos = useSelector((state: State) => state.todos)
  const { id } = useParams<{id: string}>()

  const newID = parseInt(id)
  const editedTodo = todos.find(todo => todo.id === newID)

  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  const [description, setDescription] = useState<string>(editedTodo!.description)
  const [checked, setChecked] = useState<boolean>(editedTodo!.completed)



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = () => {
    const todo = { id: editedTodo!.id, description, completed: checked  }
    dispatch(editTodo(todo))
    history.push('/')

  }
  return (
    <div>
      <h1>Edit Todo</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant='outlined' 
          name="description" 
          label="Description"
          defaultValue={editedTodo!.description} 
          onChange={handleChange} 
          />
          <FormControlLabel
          control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)}/>}
          label="Completed? "
          labelPlacement="start"
        />
          <Grid className={classes.btnContainer} container justify="space-between">
            <Grid item>
              <Button type="submit" variant="contained" color="primary">Edit Todo</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={()=> history.push('/')}>Cancel</Button>
            </Grid>
          </Grid>
      </form>
    </div>
  )
}

export default EditTodo
