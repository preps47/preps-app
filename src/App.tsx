import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './../public/vite.svg'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">
        <button onClick={() => WebApp.showAlert(`Count is equal to ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
