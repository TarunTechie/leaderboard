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
    <div className='customCursor bg-[url(/images/home.jpg)] w-screen h-screen bg-re'>
      <Header/>
      <div className='flex h-[84vh] content-center justify-center'>
      <button onClick={openScoreBoard} className='bg-white px-10 m-auto w-fit py-4 rounded-2xl border-4 border-dashed'>Start Race 🏁</button>
      </div>
    </div>
  )
}
export default App