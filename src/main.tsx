import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'

WebApp.ready()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
