import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/tailwind.css'
import Home from './pages/Home'
import Prompts from './pages/Prompts'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
