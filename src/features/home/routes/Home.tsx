import { useState } from 'react'

import { Link } from '@tanstack/react-router'

import '../assets/App.css'
import reactLogo from '../assets/react.svg'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/icons/favicon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://eruptionjs.dev" target="_blank" rel="noreferrer">
          <span className="logo eruption">🌋</span>
        </a>
      </div>
      <h1>Vite + React/TS = EruptionJS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Link to="/repositories" preload="intent">
          <button>Visit the repositories page</button>
        </Link>
      </div>
      <p>
        Edit <code>src/features/Home/routes/Home.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">Click on the Vite, React and Eruption logos to learn more</p>
    </div>
  )
}

export { Home }
