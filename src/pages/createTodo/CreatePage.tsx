import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlice'
import { useStyles } from './styles'
import { Button, Grid, TextField } from '@material-ui/core'
import { useState } from 'react'

function CreateTodo() {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [description, setDescription] = useState<string>("")



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addTodo({ description }))
    history.push('/')

  }
  return (
    <div>
      <h1>Create Todo</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant='outlined' 
          name="description" 
          label="Create Todo"
          value={description} 
          onChange={handleChange} 
          />
          <Grid className={classes.btnContainer} container justify="space-between">
            <Grid item>
              <Button type="submit" variant="contained" color="primary">Create Todo</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={()=> history.push('/')}>Cancel</Button>
            </Grid>
          </Grid>
      </form>
    </div>
  )
}

export default CreateTodo
