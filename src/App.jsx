import React from 'react'
import Background from './components/Background'
import ForeGround from './components/ForeGround'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900 overflow-hidden">
      <Background />
      <Navbar />
      <ForeGround />
      {/* <AddTaskModal/> */}
    </div>
  )
}

export default App
