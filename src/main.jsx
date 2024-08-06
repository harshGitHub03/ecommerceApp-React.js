import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//redux Provider imports
import { Provider } from 'react-redux'
import store from './reduxToolkit/store.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />

      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
