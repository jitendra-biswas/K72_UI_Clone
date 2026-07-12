import React from 'react'
import { Routes,Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Agence from './Pages/Agence';
import SmoothScroll from './SmoothScroll';
import Projects from './Pages/Projects';
const App = () => {
  return (
    <>
    <SmoothScroll />
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/agence' element={<Agence /> } />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </>
  )
}

export default App
