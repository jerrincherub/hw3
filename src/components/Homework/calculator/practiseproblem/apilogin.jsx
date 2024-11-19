import { useState } from "react"

export default function Fetch(){

    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const getuser=async (e)=>{
        e.prevent.Default()

        fetch("https://reqres.in/api/login" , {
       method:'POST',
       headers: { 
       'Content-type':'Application/json'
    },
    body :JSON.stringify({email: email,
     password: password  }),
 })
 .then((res)=>
    res.Json()
 )
 .then((resJson) =>{
    if(resJson.token){
        setMessage("Login successful")
    }
    else
    {
        setMessage("error")
    }

 })}
 return(
    <div>
        <form onSubmit={getuser}>
            <div>
        <input
        type="text"
        value={email}
        placeholder="Enter the name"
        onChange={(event)=>{
            setEmail(event.target.value)
        }}

        />
        </div>
        <div>
        
        <input
        type="password"
        value={password}
        placeholder="Enter the password"
        onChange={(event)=>{
            setPassword(event.target.value)
        }}/>
        </div> 
        <div>
        <button onClick={getuser}>
            Login
        </button>
        </div>
{message&& (<div style={{padding:5,
margin:5,
color:"red",

}}>
{message}
</div>
)}

</form>
    </div>
 )




}