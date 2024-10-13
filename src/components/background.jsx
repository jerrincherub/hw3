import { useState } from "react";

export default function Stylebackground() {
  const [backgroundColor,setbackgroundColor]=useState('');
  return (
      <div
        style={{
          backgroundColor: "#backgroundColor",
          padding: 10,
          margin: 20,
          color: "#00ffff",
          height: "100vh",
        }}
      >
        <input 
        type="text"
          value={backgroundColor}
          
          placeholder="enter color..."

          onChange={(event) => {
            setbackgroundColor(event.target.value);
            <button 
            onClick={backgroundColor}>
           change color
           </button>
          }}
        />
       
      </div>
    );
  }  