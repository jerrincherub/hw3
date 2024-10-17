import { useState } from "react";

export default function Slider()
{
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);

    return(
        <div style={{
            backgroundColor: "rgb("+red+",  "+green+",  "+blue+")"
            }}>
               slider
      <br />
      <input 
        type="range"
        value={red}
        onChange={(event)=>{
          setRed(event.target.value)
        }}
      />
      {red}
      <br />
      <input 
        type="range"
        value={green}
        onChange={(event)=>{
          setGreen(event.target.value)
        }}
      />
      {green}
      <br />
      <input 
        type="range"
        value={blue}
        onChange={(event)=>{
          setBlue(event.target.value)
        }}
      />
      {blue}
    </div>
 )
}



