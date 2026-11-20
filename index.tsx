import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/app'

const element = document.getElementById('root')
if (element == null) {
  throw new Error('Failed to find the root element')
}

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
