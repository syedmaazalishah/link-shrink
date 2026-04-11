import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import Follow from './pages/Follow'
import Home from './pages/Home'

export default () => {
  return (
    <div className='relative'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:link" element={<Follow />} />
      </Routes>
    </div>
  )
}
