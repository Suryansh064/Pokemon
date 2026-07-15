import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
    } catch {
      /* localStorage can be unavailable in some browser modes. */
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.add(theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage can be unavailable in some browser modes. */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      className={`theme-toggle ${theme === 'dark' ? 'dark' : 'light'}`}
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
    >
      {/* Sun icon (left) */}
      <svg className="icon sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="var(--sun-color)" />
      </svg>

      <span className="toggle-ball" />

      {/* Moon icon (right) */}
      <svg className="icon moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="var(--moon-color)" />
      </svg>
    </button>
  )
}
