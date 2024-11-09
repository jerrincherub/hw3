import { useState } from "react";

export default function Converter() {
    const [inr, setInr] = useState(0)
    const [aed, setAed] = useState(0)
    function inrConverter() {
        setInr(aed * 22.80)
    }
    function aedConverter() {
        setAed(inr/22.80)
    }
    return (
        <div>
            <input
                type="number"
                value={aed}
                placeholder="Enter the aed currency"
                onChange={(event) => { setAed(parseInt(event.target.value)) 
                    inrConverter()
                }} />
        
            <input
                type="number"
                value={inr}
                placeholder="Enter the inr currency"
                onChange={(event) => { setInr(parseInt(event.target.value))
                    aedConverter()
                 }} />
            




        </div>
    )
}