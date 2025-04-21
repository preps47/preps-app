import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {

  document.documentElement.setAttribute('data-theme', WebApp.colorScheme)

  return (
    <>
      <div>
        Some text
      </div>
    </>
  )
}

export default App
