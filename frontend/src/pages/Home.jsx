import React from 'react'
import Hero from '../components/Hero'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  return (
    <main className="flex flex-col justify-center items-center">
        <Hero />
        <div className="w-40 flex justify-center items-center">
          <button 
            className='w-full border cursor-pointer rounded-full hover:bg-gray-900 bg-gray-800 text-white px-4 py-2'  
            onClick={()=>navigate("/shrink")}
          >Try Shrink.It</button>
        </div>
        <div className="w-full h-50"></div>
    </main>
  )
}

export default Home