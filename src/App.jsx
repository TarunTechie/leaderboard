import './index.css'
import './App.css'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'
function App() {

  const nav=useNavigate()
  function openScoreBoard()
  {
    nav('/scoreboard')
  }
  return (
    <div>
      <Header/>
      <div className='h-screen content-center'>
      <button onClick={openScoreBoard}>Start Race</button>
      </div>
    </div>
  )
}
export default App
