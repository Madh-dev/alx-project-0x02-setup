import React from 'react'
import Link from 'next/link'

function Header() {
  return (
     <header className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </header>
  )
}

export default Header
