import Card from '@/components/common/Card'
import React, { useState } from 'react'
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';


function Home() {
  const [posts,setPosts] = useState<{title:string; content:string;}[]>([]);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const addPost = (title:string,content:string)=>{
    setPosts([...posts,{title,content}]);
  }
  return (
     <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Home Page 🏠</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Post
        </button>

        <div className="grid gap-4">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={addPost}
      />
    </>
  )
}

export default Home
