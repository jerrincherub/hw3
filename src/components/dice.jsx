import { useState } from "react";

export default function Dice() {



    const [output, setOutput] = useState(0)



    function Output() {
        setOutput(getInteger(1, 6))

    }
    function getInteger(min, max) {

        return Math.floor(Math.random() * max + min);

    }
    return (
        <div>
            <button onClick={Output}>Roll</button>
            {output}
        </div>


    )


}