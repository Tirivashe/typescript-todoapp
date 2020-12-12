import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import CreateTodo from './pages/createTodo/CreatePage'
import EditTodo from './pages/editTodo/EditTodo'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/create" component={CreateTodo} />
      <Route path="/edit/:id" component={EditTodo}/>
    </Switch>
  );
}

export default App;
