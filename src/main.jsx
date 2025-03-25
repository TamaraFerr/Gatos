import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styles/ResetStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle />
    <App />
  </StrictMode>,
)
