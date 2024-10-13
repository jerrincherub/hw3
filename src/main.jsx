import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import './index.css'

//import Thecalculator from "./components/Homework/calculator/calculator.jsx";
//import Styling from "./components/style.jsx";
//import Stylebackground from "./components/background.jsx"
import Login from "./components/login.jsx"
//import Ulogin from"./components/home.jsx"

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Login />
   
 </StrictMode>,
)
