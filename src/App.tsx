import { useState } from 'react'
import './App.css'

function App() {
  const [safety, setSafety] = useState('')

  return (
    <>
      <div className='card'>
        <h1>
          Is my password safe?
        </h1>
      </div>
      <div className='card'>
        <input type='text' onChange={ (e) => {
          if (e.target.value.length >= 16) {
            setSafety('This password is actually quite safe.')
          } else if (e.target.value.length == 0) {
            setSafety('')
          } else {
            setSafety('Nah bro...')
          }
        }}></input>
      </div>
      <div className='card'>
        <p>
          {safety}
        </p>
      </div>
    </>
  )
}

export default App
