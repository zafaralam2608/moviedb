import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root')
if (element == null) {
  throw new Error('Failed to find the root element')
}

createRoot(element).render(
  <StrictMode>
    <div>Hello World</div>
  </StrictMode>,
)
