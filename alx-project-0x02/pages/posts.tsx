import React,{useState,useEffect} from 'react'
import Header from '@/components/layout/Header'
import { type PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard';

interface PostsPageProps{
  posts: PostProps[];
}
function Posts({posts}:PostsPageProps) {


  return (
     <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page 📰</h1>
        <div className='grid gap-4'>
          {posts.map(post=>{
            return(
              <PostCard 
                title={post.title}
                body={post.body}
                userId={post.userId}
                key={post.id}
                id={post.id} 
                />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Posts


export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15"
  );
  const posts: PostProps[] = await res.json();
  
  return{
    props:{
      posts,
    },
  };
}
