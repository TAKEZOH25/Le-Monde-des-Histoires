import { useState } from 'react'
import Header from './components/Header'
import stories from './data/stories.json'

function App() {
  return (
    <div className="min-h-screen bg-brand-pastel selection:bg-brand-pink selection:text-white pb-20">
      <Header />

      {/* Temporary Debug: Check if data loads */}
      <div className="text-center text-slate-400 text-sm">
        {stories.length} histoires chargées
      </div>
    </div>
  )
}

export default App
