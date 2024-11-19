import { useState } from "react";

export default function TodoList() {
    const [list, setList] = useState('')
    const [arr, setArr] = useState([])
    const add = () => {
        const temp = [...arr]
        temp.push({list:list})
        setArr(temp)
        setList('')

    }
    const deletedata = (index) => {
        
        const temp=[...arr]
        temp.splice(index, 1)
        setArr(temp)

    }
    return (
        
            <div>
                <h1>To do List</h1>
                <div>
                <input
                    type="text"
                    value={list}
                    placeholder="Enter the text"
                    onChange={(event) => setList(event.target.value)} />
                <button 
                 onClick={add}>
                    submit</button>
                    </div>


                {arr.map((obj, index) => {
                    return (
                        <div style={{backgroundColor:"f2f2f2"}}>
                           <li key={index}> {obj.list}
                            <button style={{backgroundColor:"#808080",
                                padding:5,
                                margin:5
                            }}
                             onClick={deletedata}>
                                Delete
                            </button></li>

                        </div>
                    )
                })}




            </div>
)}