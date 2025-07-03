import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contract from './components/Contract'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contract/>}></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App