import React from 'react'
import {type CardProps } from '@/interfaces'
function Card({title,content}:CardProps) {
  return (
    <div className='border rounded-lg p-4 shadow hover:shadow-lg transition'>
      <h2 className='text-xl font-bold mb-2'>{title}</h2>
      <p className='text-gray-700'>{content}</p>
    </div>
  )
}

export default Card
