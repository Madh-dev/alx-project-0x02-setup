import { PostModalProps } from '@/interfaces'
import React, { useState } from 'react'

function PostModal({isOpen,onClose,onAddPost}:PostModalProps) {

    const[title,setTitle] = useState("");
    const[content,setContent] = useState("");

    if(!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(title && content){
            onAddPost(title,content);
            setTitle("");
            setContent("");
            onClose();
        }
    }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <h2 className='text-xl font-semibold mb-4'>Add a New Post</h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value as string)}
                    className='w-full border p-2 rounded'
                />
                <textarea
                    placeholder='Content'
                    value={content}
                    onChange={(e)=> setContent(e.target.value as string)}
                    className='w-full border p-2 rounded'
                />
                <div className='flex justify-end gap-2'>
                    <button
                        type='button'
                        onClick={onClose}
                        className='px-4 py-2 bg-gray-300 rounded'
                    > 
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className='px-4 py-2 bg-blue-600 text-white rounded'
                        >
                            Add Post
                        </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostModal
