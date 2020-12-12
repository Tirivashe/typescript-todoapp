import { makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: "0 auto"
  },

  button: {
    backgroundColor: blue["800"],
    color: "white",
    marginTop: "1rem",
    boxShadow: "none",
    '&:hover':{
      backgroundColor: blue["600"]
    }
  }
}))