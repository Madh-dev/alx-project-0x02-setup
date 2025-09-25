import React from 'react'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

function about() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold">About Page 📖</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </>
  )
}

export default about
