import React,{useState,useEffect} from 'react'
import Header from '@/components/layout/Header'
import { type PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard';

function posts() {
  const [posts,setPosts] =useState<PostProps[]>([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=15")
    .then((response) => response.json())
    .then((json) => setPosts(json));
  },[]);

  return (
     <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page 📰</h1>
        <div className='grid gap-4'>
          {posts.map(posts=>{
            return(
              <PostCard 
                title={posts.title}
                body={posts.body}
                userId={posts.userId}
                key={posts.id}
                id={posts.id} 
                />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default posts
