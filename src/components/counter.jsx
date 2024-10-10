import { useState } from "react";

function Counter(){
    const [a, setA]=useState(0)
    function Increasecount(){
        setA(a+1)
    }
    return(
        <div>
           Count is {a}
           <button onClick={Increasecount}>
            increase</button>
        </div>
    );
}
export default Counter;