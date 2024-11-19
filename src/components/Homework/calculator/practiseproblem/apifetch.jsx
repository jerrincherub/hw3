import { data } from "autoprefixer"
import { useEffect, useState } from "react"

export default function Data(){
    const [user,setUser]=useState([])
    const getuser=()=>{
        fetch("https://reqres.in/api/users?page=1")
        .then((res)=>{
            return res.json()
      })
      .then((resJson)=>{
        setUser(resJson.data)
        
      })
    }
    useEffect(()=>{
        getuser()},[])
        console.log(data)
return(

    user.map((obj,index)=>{
        return(
  <li key={index}>{obj.id}{obj.email}{obj.first_name}{obj.last_name}{obj.avatar}
   </li>


        )
    }))



}