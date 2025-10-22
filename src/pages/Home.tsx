import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <header className="max-w-6xl mx-auto p-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">RavagerAI</h1>
        <nav>
          <Link to="/prompts" className="text-sm px-4 py-2 bg-white bg-opacity-10 rounded-md hover:bg-opacity-20">Prompt Library</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-6">AI Prompt Library for creators</h2>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">Curate, preview and quickly use high-quality prompts for writing, coding, design, and more.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/prompts" className="px-6 py-3 bg-indigo-500 rounded-md font-medium shadow hover:bg-indigo-600">Browse Prompts</Link>
          <a href="#features" className="px-6 py-3 border border-white border-opacity-10 rounded-md">Learn more</a>
        </div>

        <section id="features" className="mt-20 text-left">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="p-4 bg-white bg-opacity-5 rounded">Curated templates</li>
            <li className="p-4 bg-white bg-opacity-5 rounded">Categories & tags</li>
            <li className="p-4 bg-white bg-opacity-5 rounded">One-click copy</li>
            <li className="p-4 bg-white bg-opacity-5 rounded">Export & share</li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-8 text-sm text-slate-300">Made with ❤️ — RavagerAI</footer>
    </div>
  )
}
