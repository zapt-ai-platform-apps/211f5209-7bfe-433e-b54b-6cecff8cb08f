import React from 'react';

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-serif">ReactJS App</h1>
      </header>
      <main className="flex-grow p-4">
        <h2 className="text-xl font-semibold">Welcome to our App</h2>
        <p className="text-base mt-2">
          This is an example app enhanced with a custom design system using Tailwind CSS.
        </p>
        <button className="bg-secondary text-white px-4 py-2 rounded mt-4 hover:bg-accent cursor-pointer">
          Get Started
        </button>
      </main>
      <footer className="bg-neutral-200 text-center p-4">
        Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">ZAPT</a>
      </footer>
    </div>
  )
}