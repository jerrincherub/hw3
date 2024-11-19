import { useState } from "react"

export default function Bg(){
const [backgroundColor,setBackgroundColor]=useState('')

return(
    <div style={{
        backgroundColor:backgroundColor,
        padding:10,
        margin:20,height:"100vh"
    }}>
        <input
        type="text"
        value={backgroundColor}
        placeholder="Enter the color"
        onChange={(event)=>
            setBackgroundColor(event.target.value)
        
        }
        />
        <button onClick={backgroundColor}>
        
        </button>
    </div>

)
}