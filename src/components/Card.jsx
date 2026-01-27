import React from 'react'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { motion, scale } from "framer-motion"

const Card = ({ id, tag, title, content, date, reference, onDelete, onEdit }) => {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
            className='w-58 max-h-60 rounded-4xl bg-white p-6 relative flex flex-col shadow-md hover:shadow-lg transition-shadow'
        >
            <div className='Head w-full'>
                <p className='text-gray-600 text-sm mb-1'>{tag}</p>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{title}</h3>
                <hr className='border-gray-300 mb-4' />
            </div>

            <div className='Middle w-full grow overflow-hidden min-h-0'>
                <h4 className='text-gray-700 line-clamp-5'>
                    {content}
                </h4>
            </div>

            <div className='Foot w-full mt-4'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-gray-600 text-sm'>{date}</h4>
                    <div className='flex gap-2'>
                        <button onClick={() => onEdit({ id, tag, title, content, date })} className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                            <FiEdit2 size={18} />
                        </button>
                        <button onClick={() => onDelete(id)} className='text-red-600 hover:text-red-800 text-sm font-medium'>
                            <FiTrash2 size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card