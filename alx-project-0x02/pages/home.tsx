import Card from '@/components/common/Card'
import React from 'react'

function Home() {
  return (
    <div className='p-6 space-y-4'>
      <h1 className="text-2xl font-semibold">This is the Home Page</h1>
      <Card title='Card One' content='This is the First card.' />
      <Card title='Card Two' content='This is the Second card.' />
    </div>
  )
}

export default Home
