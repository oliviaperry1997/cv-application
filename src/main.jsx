import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Cv from './components/Cv.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
)
