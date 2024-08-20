import { useState } from 'react'
import { Button } from './components/ui/button'
import { HeartOff } from 'lucide-react'
import Hero from './components/custom/Hero'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <Hero/>
    </>
  )
}

export default App
