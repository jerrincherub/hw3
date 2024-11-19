import { useState } from "react";

export default function UpArray()
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [arr,setArr]=useState([])
    return(
        <div>
            <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event)=>{
                setName(event.target.value)
            }}/>
             <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}/>
            <button disabled={(name.length==0?true:false)}
            style={{color:"red",
                display:"block",
                padding:5
            }}
            onClick={()=>
            {
                const temp=[...arr]
                temp.push({name:name,email:email})
                setArr(temp)
            }
            }>
                Add
            </button>
          {arr.map((obj,index)=>{
            return(
                <div style={{
                    padding:5,
                    margin:5,
                    borderRadius:10,
                    display:"in-lineblock"
                }}>
                {index+1}.<span style={{padding:10,
                    margin:10
                }}>{obj.name}</span>
                <span style={{padding:10,margin:10}}>
                {obj.email}</span>
                <button disabled={(index==0?true:false)}
                style={{
                    display:index==0?"none":"block",
                    color:"red",
                    
                }}
                onClick={()=>{
                    if(index>0){
                        const newuser=[...arr]
                    const temp=newuser[index]
                    newuser[index]=newuser[index-1]
                    newuser[index-1]=temp
                    setArr(temp)
                    }
                }}
                >
                    Up
                </button>
                </div>
              
            )
          })}
        </div>
    )
}