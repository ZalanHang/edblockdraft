"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-12 px-24 z-10">
      
        <img src="/images/classroom-technology.jpg" alt="Classroom using technology" className='rounded-lg border-4 border-accent' />
        <h1 className="m-4">EdBlock</h1>
        <p className="font-semibold text-center">Empowering classrooms through a decentralized system</p>
        <div className="flex md:flex-row flex-col w-full items-center justify-center gap-4 py-4">
          <Link href="/learn-more" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex-1 max-w-xs text-center">
            <p>Learn More</p>
          </Link>
          <Link href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex-1 max-w-xs text-center">
            <p>Get Started</p>
          </Link>
        </div>

      {/* <div className="absolute inset-0">
        <img src="/images/classroom-technology.jpg" alt="Classroom using technology" className="w-full h-full object-cover opacity-30 z-0" />
      </div> */}
      {/* <footer className='mt-auto text-center'>
        <a href="https://www.flaticon.com/free-icons/note" title="note icons">Note icons created by Freepik - Flaticon</a>
      </footer> */}
    </main>
  )
}
