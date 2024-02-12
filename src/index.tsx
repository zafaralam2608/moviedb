import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './main/component'
import store from './store'

const element = document.getElementById('root')
if (element == null) { throw new Error('Failed to find the root element') }

const root = ReactDOM.createRoot(element)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
