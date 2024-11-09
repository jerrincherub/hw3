import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import './index.css'

//import Thecalculator from "./components/Homework/calculator/calculator.jsx";
//import Styling from "./components/style.jsx";
//import Stylebackground from "./components/background.jsx"
import Loginpage from "./components/loginpage.jsx"
//import Logoperation from"./components/log.jsx"
//import Loginbackground from './components/home.jsx';
import Logcolor from "./components/in.jsx";
import Slider from "./components/slider.jsx"
import Redslider from "./components/redslide.jsx"
import Calc from "./components/calc.jsx"
import Dice from './components/dice.jsx';
import Greater from './components/greater.jsx';
import Converter from './components/currencyconverter.jsx';
import Conversion from './components/conversion.jsx';
import  "./index.css";
import Card from './components/card.jsx';
import Apple from './components/apple.jsx';
import Array from './components/array.jsx';
import Pay from './components/cap.jsx';
import Page from './components/loginlayout.jsx';
import Map from './components/arraymap.jsx';
import ArraysMap from './components/arrayoperation.jsx';
import ArraysFilter from './components/arrayfilter.jsx';
import Deletedlist from './components/deletedlist.jsx';
import FilterArrayExample from './components/filter.jsx';
import ArrayFunction from './components/arrayfunction.jsx';
import UpDown from './components/arrayupdown.jsx';
import StyleUpDown from './components/updownstyle.jsx';
import Flightbooking from './components/flightbooking.jsx';
import Fetcher from './components/fetchapi.jsx';
import Apidata from './components/fetchdataapi.jsx';
import LoginPageApi from './components/apiloginpage.jsx';


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <LoginPageApi/>
   
   </StrictMode>,
)
