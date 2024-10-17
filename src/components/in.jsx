import { useState } from "react";

export default function Logcolor()
{
    
    const [msg,setMessage]=useState("");
    const [out,setOut]=useState("")
    const [backgroundColor,setBackgroundColor]=useState("");
    
     
    function onButtonClick(){
        
            
            setMessage("Login successfull") 
            setBackgroundColor("#00ff00")
    }
    function logOut(){
        setMessage("Logout is successful")
        setBackgroundColor("#ff0000")

    }
  
    return(
        <div
        style={{
            backgroundColor: backgroundColor,
            padding: 10,
            margin: 20,
            color: "#0000ff",
            height: "100vh",
          }}
        >
        <button onClick={onButtonClick}> 
           
            Login
        </button>
        {msg}
       <br/>
        
        <button onClick={logOut}> 
           
            Logout
            
            
        </button>
        </div>
    
)
}
