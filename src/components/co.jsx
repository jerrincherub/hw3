import { useState } from "react";

function Co(){
  const [output, setOutput] = useState(0);
 
  
  function Output(){
    setOutput(sum(num1,num2))
  }
  function sum(num1, num2){
    return num1+num2;
  }

  return (
    <div>
      this is the calculator
      <input  
        placeholder="enter num 1"
      />
      <input  
        placeholder="enter num 2"
      />
      <button >{Output}+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      {output}
      
    </div>
  )
}

export default Co;