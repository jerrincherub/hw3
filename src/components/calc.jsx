import { useState } from "react";

export default function Calc(){
    const [num1,setNum1]=useState(0)
   const [num2,setNum2]=useState(0)
   
    const [output,setOutput]=useState(0)
    function Output(){
        setOutput(sum(num1,num2))
    
      
    }
    function subOp(){
        setOutput(substract(num1,num2))
    }
    function multOp(){
          setOutput(multiply(num1,num2))
    }

    function divOp(){
        
      setOutput(division(num1,num2))
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
        <input
        placeholder="Enter the number"  
        onChange={(event)=>{setNum1(parseInt(event.target.value))}}
        />
        <input 
        placeholder="Enter the number"
       onChange={(event)=>{setNum2(parseInt(event.target.value))}}
        />
       <button onClick={Output} >+</button>
       <button onClick={subOp} >-</button>
       <button onClick={multOp} >*</button>
       <button onClick={divOp}>/</button>
       {output}
        </div>

    )
}


   
   
   
   
   
   
   
   
   
   
   
    
