import React, { useState } from 'react'
import Background from './components/Background'
import ForeGround from './components/ForeGround'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCard, setEditingCard] = useState(null)
  const [cardsData, setCardsData] = useState([
    { id: 1, tag: "#Exam", title: "Maths Endsem", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", date: "16 Jan 2026" },
    { id: 2, tag: "#Work", title: "Project Deadline", content: "Finish the React notes app by Friday", date: "18 Jan 2026" },
    { id: 3, tag: "#Personal", title: "Grocery List", content: "Milk, Eggs, Bread, Coffee", date: "Today" },
    { id: 4, tag: "#Study", title: "React Learning", content: "Complete Tailwind CSS tutorial", date: "20 Jan 2026" },
    { id: 5, tag: "#Meeting", title: "Team Sync", content: "Discuss project progress and blockers", date: "Tomorrow" },
    { id: 6, tag: "#Meeting", title: "Team Sync 2", content: "Follow up on action items", date: "22 Jan 2026" },
    { id: 7, tag: "#Meeting", title: "Client Call", content: "Demo of the new features", date: "24 Jan 2026" }
  ])

  const handleAddNote = (noteData) => {
    if (editingCard) {
      // Update existing card
      setCardsData(cardsData.map(card => 
        card.id === editingCard.id 
          ? {
              ...card,
              tag: noteData.tag,
              title: noteData.title,
              content: noteData.description,
              date: noteData.date
            }
          : card
      ))
      setEditingCard(null)
    } else {
      // Add new card
      const newCard = {
        id: cardsData.length + 1,
        tag: noteData.tag,
        title: noteData.title,
        content: noteData.description,
        date: noteData.date
      }
      setCardsData([...cardsData, newCard])
    }
  }

  const handleEditCard = (card) => {
    setEditingCard(card)
    setIsModalOpen(true)
  }

  const handleDeleteCard = (cardId) => {
    setCardsData(cardsData.filter(card => card.id !== cardId))
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingCard(null)
  }

  return (
    <div className="relative w-full h-screen bg-zinc-900 overflow-hidden">
      <Background />
      <Navbar onAddClick={() => {
        setEditingCard(null)
        setIsModalOpen(true)
      }} />
      <ForeGround cardsData={cardsData} onDeleteCard={handleDeleteCard} onEditCard={handleEditCard} />
      <PopUp isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleAddNote} editingCard={editingCard} />
    </div>
  )
}

export default App
