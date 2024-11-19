import { useState } from "react";

export default function ArrayFn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [arr, setArr] = useState([])
    const [deletelist, setDelete] = useState([])
    const [search, setSearch] = useState('')
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={search}
                    placeholder="Search"
                    onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter the name"
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input
                    type="text"
                    value={email}
                    placeholder="Enter the email"
                    onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <button disabled={(name.length == 0 ? true : false)}
                    style={{
                        padding: 5,
                        margin: 5,
                        backgroundColor: "grey"
                    }}
                    onClick={() => {
                        const temp = [...arr]
                        temp.push({
                            name: name,
                            email: email
                        })
                        setArr(temp)
                        setName('')
                        setEmail('')

                    }}>Add
                </button>
            </div>
            {arr.filter(obj =>
                obj.name.toLowerCase().includes(search.toLowerCase())

            ).map((obj, index) => {
                return (
                    <div style={{
                        
                        margin: 5,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor:"grey",


                    }}
                    >
                        {index + 1}.{obj.name}<span style={{ margin: 5 }}>{obj.email}</span>

                        <button onClick={() => {
                            const deleteditem = arr.splice(index, 1)[0]
                            console.log(deleteditem)
                            setArr(arr)
                            setDelete([...deletelist, deleteditem])



                        }}>
                            Delete
                        </button>
                    </div>

                )
            })}
            {deletelist.map((obj, index) => {
                return (
                    <li key={index}>{obj.name}{obj.email}

                    </li>
                )
            }


            )}

        </div>


    )





}