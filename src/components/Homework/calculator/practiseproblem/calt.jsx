import { useState } from "react";

export default function Cal() {
    const [num1, setNum1] =useState(0)
    const [num2, setNum2] =useState(0)
    const [output, setOutput] =useState(0)
    const addition = (num1, num2) => {
        return num1 + num2
    }
    const substract = (num1, num2) => {
        return num1 - num2
    }
    const multiply = (num1, num2) => {
        return num1 * num2
    }
    const division = (num1, num2) => {
        return num1 / num2
    }
    const add = () => {
        setOutput(addition(num1,num2))
    }
    const sub = () => {
        setOutput(substract(num1,num2))
    }
    const mult = () => {
        setOutput(multiply(num1,num2))
    }
    const div = () => {
        setOutput(division(num1,num2))
    }
    return (
        <div>
            <input
                
                
                placeholder="Enter the number"
                onChange={(event) => { setNum1(parseInt(event.target.value)) }} />
            <input
                
                
                placeholder="Enter the number"
                onChange={(event) => { setNum2(parseInt(event.target.value)) }}
            />
            <div>
                <button onClick={add}>
                    +
                </button>
            </div>
            <div>
                <button onClick={sub}>
                    -
                </button>
            </div>
            <div>
                <button onClick={mult}>
                    *
                </button>
            </div>
            <div>
                <button onClick={div}>
                    /
                </button>
            </div>

            {output}

        </div>
    )












}




