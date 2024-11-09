import { useEffect, useState } from "react";
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
    useEffect(()=>{
        getUser()},[]);
    console.log(user);
    
    return(
        <div>
            {user.map((obj,index)=>
                 (
                    <li key={index}>{obj.id}<span style={{margin:10}} >{obj.name}</span>
                   <span style={{margin:10}}> {obj.email}</span>
                   <span style={{margin:10}}>{obj.first_name}</span>
                   <span style={{margin:10}}> {obj.last_name}</span>
                   <span style={{margin:30}}> {obj.avatar}</span>
                   </li>
                )
               
            )}
            
            <button onClick={getUser}></button>
                    
            </div>
             
    )
    

    
}