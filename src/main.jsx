import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Thecalculator from "./components/Homework/calculator/calculator.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Thecalculator />
   
  </StrictMode>,
)
