import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import samplePrompts from '../prompts/prompts.json'

type Prompt = {
  id: string
  title: string
  description: string
  category?: string
}

export default function Prompts() {
  const [prompts, setPrompts] = useState<Prompt[]>(samplePrompts)
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')

  function addPrompt() {
    if (!newTitle) return
    const p: Prompt = { id: Date.now().toString(), title: newTitle, description: newDesc }
    setPrompts([p, ...prompts])
    setNewTitle('')
    setNewDesc('')
  }

  function removePrompt(id: string) {
    setPrompts(prompts.filter(p => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">RavagerAI</h1>
        <Link to="/" className="text-sm px-4 py-2">Home</Link>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Prompt Library</h2>
          <p className="text-sm text-slate-600 mb-4">Local demo of prompts. Add/remove prompts (local state only).</p>

          <div className="mb-4 flex gap-2">
            <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Title" className="flex-1 p-2 border rounded" />
            <input value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder="Description" className="flex-1 p-2 border rounded" />
            <button onClick={addPrompt} className="px-4 py-2 bg-indigo-600 text-white rounded">Add</button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {prompts.map(p => (
              <div key={p.id} className="p-4 bg-white shadow rounded flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => navigator.clipboard?.writeText(p.description)} className="px-2 py-1 border rounded">Copy</button>
                  <button onClick={() => removePrompt(p.id)} className="px-2 py-1 text-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
