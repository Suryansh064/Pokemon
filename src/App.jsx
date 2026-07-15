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
