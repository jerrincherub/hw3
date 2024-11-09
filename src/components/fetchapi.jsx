import { useState } from "react";
export default function Fetcher(){
    const [user,setUser]=useState([])
    const getUser=()=>{
        fetch("https://reqres.in/api/users?page=1")
        .then((res)=>{
            return res.json()
        })
        .then((resJson)=>{
            setUser(resJson.data)
        })
    }
    console.log(user);
    
    return(
        <div>
            {user.map((obj,index)=>
                 (
                    <li key={index}>{user.id}{user.name}{user.email}{user.first_name}{user.last_name}{user.avatar}</li>
                )

            )}
            <button onClick={getUser}> get users</button>
            
                    
            </div>
             
    )
    

    
}