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
      <div className='flex h-screen w-screen content-center justify-center'>
      <button onClick={openScoreBoard} className='bg-white p-10 m-auto w-fit rounded-2xl border-6 border-dotted'>Start Race</button>
      </div>
    </div>
  )
}
export default App