import React from 'react'
import Navbar from './components/navbar/Navbar'
import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Blogs from './pages/blogs/Blogs'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Toaster />
      <Routes>
      <Route path="/" element={<Blogs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      
      </Routes>
      
      
    </div>
  )
}

export default App