import { useState } from "react";

export default function Log(){
    const [backgroundColor,setBackgroundColor]=useState('')
    const [msg,setMsg]=useState('')
    const Login=()=>{
        setMsg("Login Successful")
        setBackgroundColor("#FF0000")

    }
    const Logout=()=>{
        setMsg("Logout Successful")
            setBackgroundColor("#0000FF")
        
    }

    return(
        <div style={{
            backgroundColor:backgroundColor,
            padding:10,
            margin:10,
            height:"100vh"
        }}>
            <button onClick={Login}>
                Login
            </button>
            <button onClick={Logout}>
                Logout
            </button>
            {msg}
        </div>
    )
    }