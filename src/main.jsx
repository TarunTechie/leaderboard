import * as React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScoreBoard from "./pages/scoreBoard.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/scoreboard",
    element:<ScoreBoard/>
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
