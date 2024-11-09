import { useState } from "react";

export default function Array() {
    const [a, setA] = useState('')
    const [arr, setArr] = useState([])
    return (
        <div>
            <input
                type="text"
                value={a}
                onChange={(event => { setA(event.target.value) })}
            />
            <button
                style={{
                    border: "1px solid red",
                    color: "red",
                    padding: 5,
                    borderRadius: 10,
                    marginLeft: 10
                }}
                onClick={() => {
                    const temp = [...arr]
                    temp.push(a)
                    setArr(temp)
                    setA('')
                    
                }}>
                Add
            </button>

            <button
                style={{
                    border: "1px solid green",
                    color: "green",
                    padding: 5,
                    borderRadius: 10,
                    marginLeft: 10
                }}
                onClick={() => {
                    const temp = [...arr]
                    temp.pop(a)
                    setArr(temp)
                    setA('')
                
                
                
                }}>
                Remove
            </button>
            <div>
                {arr}
            </div>

        </div>


    )
}