import { useState } from 'react'
import './App.css'
import Cosmetics from './Components/Cosmetics/Cosmetics'
import Shoes from './Components/Shoes/Shoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  )
}

export default App
