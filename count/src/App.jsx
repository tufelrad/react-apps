import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount((count) => count + 1)
  }
  const minValue = () => {
    setCount((count) => count - 1)
  }
  return (
    <>
      
      <h1>Counter {count}</h1>
      <div className="card">
        <div>{count}</div>
        <button onClick={addValue}>
          Yes
        </button>
        <button onClick={minValue}>
          No
        </button>
        </div>
        
    </>
  )
}

export default App
