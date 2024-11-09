import { useState } from "react";

export default function Greater() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [output, setOutput] = useState(0)
    function Output() {
        if (a > b) {
            setOutput(a)
        }
        else {
            setOutput(b)
        }

    }
    return (
        <div>
            <input
                type="number"
                value={a}
                placeholder="Enter the first number"
                onChange={(event) => { setA(parseInt(event.target.value)) }} />
            <input
                type="number"
                value={b}
                placeholder="Enter the second number"
                onChange={(event) => { setB(parseInt(event.target.value)) }}
            />
            <button onClick={Output}>
                Greater

            </button>{output}
        </div>
    )


}