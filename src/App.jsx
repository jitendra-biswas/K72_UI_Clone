import React from 'react'
import { Routes,Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
    </>
  )
}

export default App
