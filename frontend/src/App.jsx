// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'



import Navigation from "./components/Navigation";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
