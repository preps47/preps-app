import './App.css'
import WebApp from '@twa-dev/sdk'
import * as motion from 'motion/react-client'

function App() {

  document.documentElement.setAttribute('data-theme', WebApp.colorScheme)

  return (
    <>
      <div>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Some Text
        </motion.p>
      </div>
    </>
  )
}

export default App
