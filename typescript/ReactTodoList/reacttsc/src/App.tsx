import React, {FC} from 'react'
import { useState } from 'react'
import './App.css'

const App: FC = ()=> {
  const [task, setTask] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <input type="text" placeholder='task...'/>
        <input type="number" placeholder='Deadline in Days'/>
        <button>Add Task</button>
      </div>
      <div className='todoList'>

      </div>
    </div>
  )
}

export default App
