import React, { useState } from 'react'
import Background from './components/Background'
import ForeGround from './components/ForeGround'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative w-full h-screen bg-zinc-900 overflow-hidden">
      <Background />
      <Navbar onAddClick={() => setIsModalOpen(true)} />
      <ForeGround />
      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
