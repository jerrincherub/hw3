import { useState } from "react"

export default function DiceRoller(){
 const [num,setNum]=useState(1)
 const [results,setResults]=useState([])

   const Roll=()=>{
    for(let i=1;i<=num;i++){
        const temp=[...results]
        const rolldice=Math.floor(Math.random()*6+1)
        temp.push(rolldice)
        setResults(temp)

    
    }
    
   }

 return(
    <div>
        <input
        type="number"
        placeholder="Enter the number of dice"
        onChange={(event)=>{
           setNum(parseInt(event.target.value))
           
        }}
         min="1" max="12"/>
         <div >
         <button style={{backgroundColor:"red",
            margin:5,
            
            padding:5
         }}
          onClick={Roll}>
            Rolldice
         </button>
         </div>
         {results.map((result,index)=>(
           <li>
            key={index}{result}
           </li> 
         )
         
        )}

         
    </div>
 )





}