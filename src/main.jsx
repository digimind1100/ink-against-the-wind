import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'  // ✅ or './index.css' depending on where you put Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
