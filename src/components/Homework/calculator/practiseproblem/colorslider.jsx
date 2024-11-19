import { useState } from "react";

export default function ColorSlider() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return (
        <div style={{
            backgroundColor: "rgb(" + red + "," + green + "," + blue + ")"
        }}
        >
            <input
                type="range"
                onChange={(event) => {
                    setRed(parseInt(event.target.value) * 2.55)
                }}
            />
            {red}
            <input
            />
            <input
                type="range"
                onChange={(event) => {
                    setGreen(parseInt(event.target.value)* 2.55)
                }}
            />
            {green}
            
            <input
                type="range"
                onChange={(event) => {
                    setBlue(parseInt(event.target.value) * 2.55)
                }}
            />
            {blue}



        </div>
    )
}