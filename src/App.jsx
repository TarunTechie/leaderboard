import { useState } from 'react'
import './index.css'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='h-screen content-center'>
      <button>Start Race</button>
      </div>
    </div>
  )
}
export default App
