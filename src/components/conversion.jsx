import { useState } from "react"

export default function Conversion() {
    const [inr, setInr] = useState(0)
    const [aed, setAed] = useState(0)

    function inrConverter() {
        setInr(aed * 22.80)
    }
    function aedConverter() {
        setAed(inr * 0.044)
    }

    return (
        <div
            className="p-10 bg-red-500">
            <input
                type="number"
                value={aed}
                placeholder="Enter the aed currency"
                onChange={(event) => {
                    setAed(parseInt(event.target.value))
                    inrConverter()
                }} />

            <input
                type="number"
                value={inr}
                placeholder="Enter the inr currency"
                onChange={(event) => {
                    setInr(parseInt(event.target.value))
                    aedConverter()
                }} />





        </div>
    )
}