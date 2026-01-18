import React, { useRef } from 'react'
import Card from './Card'

const ForeGround = () => {
  const ref = useRef(null)

  const cardsData = [
    { id: 1, tag: "#Exam", title: "Maths Endsem", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", date: "16 Jan 2026" },
    { id: 2, tag: "#Work", title: "Project Deadline", content: "Finish the React notes app by Friday", date: "18 Jan 2026" },
    { id: 3, tag: "#Personal", title: "Grocery List", content: "Milk, Eggs, Bread, Coffee", date: "Today" },
    { id: 4, tag: "#Study", title: "React Learning", content: "Complete Tailwind CSS tutorial", date: "20 Jan 2026" },
    { id: 5, tag: "#Meeting", title: "Team Sync", content: "Discuss project progress and blockers", date: "Tomorrow" },
    { id: 6, tag: "#Meeting", title: "Team Sync 2", content: "Follow up on action items", date: "22 Jan 2026" },
    { id: 7, tag: "#Meeting", title: "Client Call", content: "Demo of the new features", date: "24 Jan 2026" }
  ]

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
        />
      ))}
    </div>
  )
}

export default ForeGround
