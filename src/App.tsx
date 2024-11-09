import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(1)
  }

  return (
    <>
      <button onClick={add}>+</button>
      <h1>{count}</h1>
      
    </>
  )
}

export default App
