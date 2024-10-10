import Addition from "./addition"
import Substraction from "./substraction"
import Multiplication from "./multiplication"
import Division from "./division"
import { useState } from "react"

function Thecalculator(){

    const[a,setA]=useState(0)
    const[b,setB]=useState(0)
    function Increasecounta(){
        setA(a+1)
        
    }
    function Increasecountb(){
        setB(b+1)
    }
    function handlenumber1(event){
        var c=parseInt(event.target.value)
        setA(c)
    }
    function handlenumber2(event){
        var d=parseInt(target.event.value)
        setB(d)
    }
    function sum(num1,num2){
        return num1+num2
    }
    function substract(num1,num2){
        return num1-num2
    }
    function multiply(num1,num2){
        return num1*num2
    }
    function division(num1,num2){
        return num1/num2
    }

    return(
        <div>
           The Calculator 
           <input value={a}
           onChange={handlenumber1}
           />
        
           <button onClick={Increasecounta}>
            number1
            </button>
            <input value={b}
            onChange={handlenumber2}
            />
            <button 
             onClick={Increasecountb}>
            number2
            </button>
           <Addition num1={a} num2={b} sum={sum} />
           <Substraction num1={a} num2={b} substract={substract} />
           <Multiplication num1={a} num2={b} multiply={multiply} />
           <Division num1={a} num2={b} division={division} />
        </div>
        
        
        
    )
    
    



}



export default Thecalculator;