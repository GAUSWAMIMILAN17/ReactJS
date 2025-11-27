import './App.css'
import LudoBoard from "./LudoBoard"
import TodoList from "./TodoList"
import Lottery from './Lottery'

import Title from "./components/Title"
import Task from "./components/Task"
import Button from './components/Button'
import "./todo.css"
function App() {

  return (
    <div className='todo-card'>
      <Title />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Button />
    </div>
  )
}

export default App
