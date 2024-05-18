import { Hero } from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import React from 'react'
import { navItems } from '@/constants'


export default function App() {
  return (
    <div className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden px-12 lg:px-60'>
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </div>
  )
}
