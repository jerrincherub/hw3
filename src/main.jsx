import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import './index.css'

//import Thecalculator from "./components/Homework/calculator/calculator.jsx";
//import Styling from "./components/style.jsx";
//import Stylebackground from "./components/background.jsx"
//import Login from "./components/login.jsx"
//import Logoperation from"./components/log.jsx"
//import Loginbackground from './components/home.jsx';
import Logcolor from "./components/in.jsx";
import Slider from "./components/slider.jsx"
import Redslider from "./components/redslide.jsx"
import Calc from "./components/calc.jsx"
//import Co from './components/co.jsx';



createRoot(document.getElementById('root')).render(
 <StrictMode>
    < Calc/>
   
 </StrictMode>,
)
