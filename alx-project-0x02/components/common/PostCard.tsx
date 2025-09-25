import { PostProps } from '@/interfaces'
import React from 'react'

function PostCard({title,body,userId}:PostProps) {
  return (
    <div className='border bg-red-100 rounded-lg p-4 shadow hover:shadow-lg transition'>
      <h2 className='text-xl font-bold mb-2 text-amber-500'>{title}</h2>
      <p className='text-gray-700 mb-2'>{ body} </p>
      <span className='text-sm text-gray-500'>User ID: {userId}</span>
    </div>
  )
}

export default PostCard
