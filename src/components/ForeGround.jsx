import React, { useRef } from 'react'
import Card from './Card'

const ForeGround = ({ cardsData, onDeleteCard, onEditCard }) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] 
                 z-20 p-4 flex flex-wrap gap-3 overflow-y-auto"
    >
      {cardsData.map(card => (
        <Card
          key={card.id}
          {...card}
          reference={ref}
          onDelete={onDeleteCard}
          onEdit={onEditCard}
        />
      ))}
    </div>
  )
}

export default ForeGround
