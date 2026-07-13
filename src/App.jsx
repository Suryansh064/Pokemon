import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './Pokemon'
import { ThemeToggle } from './ThemeToggle'

function App() {
  return (
    <>
      <div className="theme-wrapper">
        <ThemeToggle />
      </div>
      <Pokemon />
    </>
  )
}

export default App
