import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-40 flex justify-center items-center mt-10">
        <div className='animate-spin w-20 h-20 border-6 border-theme border-t-6 border-t-white rounded-full'></div>
        <p className="text-4xl font-semibold ml-5">Generating Link</p>
    </div>
  )
}

export default Loader