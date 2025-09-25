import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='bg-gray-800 text-white p-4 flex gap-4'>
      <Link href={"/home"}>Home</Link>
      <Link href={"/about"}>About</Link>
    </header>
  )
}

export default Header
