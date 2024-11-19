import { useState } from "react";

export default function TempConverter() {
    const [degree, setDegree] = useState(0)
    const [farenheat, setFarenheat] = useState(0)
    const DegreeConvert = () => {
        const d = (farenheat - 32) * 5 / 9
        setDegree(d)
    }
    const FarenheatConvert = () => {
        const f = (degree * 9/5) + 32
        setFarenheat(f)
        console.log(degree)
    }

    return (
        <div>
            <div>
                <input
                    type="number"
                    value={degree}
                    placeholder="Enter in degree "
                    onChange={(event) => {
                        setDegree(parseInt(event.target.value))
                        FarenheatConvert()
                    }} />
            </div>
            <div>
                <input
                    type="number"
                    value={farenheat}
                    placeholder="Enter in farenheat "
                    onChange={(event) => {
                        setFarenheat(parseInt(event.target.value))
                        DegreeConvert()
                    }} />

            </div>

        </div>
    )
}