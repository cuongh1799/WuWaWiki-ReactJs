import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WuWaNavBar from './Components/WuWaNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WuWaNavBar/>
    </>
  )
}

export default App
