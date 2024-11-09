import { useState } from "react"
export default function UpDown() {
    const [arr, setArr] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter the name"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter the email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}

                />
            </div>
            <div>
                <button disabled={(name.length == 0 ? true : false)}
                    style={{
                        backgroundColor: "red"
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
                    }}>

                    Add
                </button>
            </div>

            {arr.map((obj, index) => {
                return (
                    <div
                        style={{
                            backgroundColor: "#f2f2f2",
                            margin: 10,
                            borderRadius: 60,
                            padding: 5,
                            display: "in-lineblocks",
                            shadowColor: '#000',
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84

                        }}
                    >
                        {index + 1}.{obj.name}<span style={{ marginLeft: 100 }}>{obj.email}</span>
                        <button disabled={(index == 0 ? true : false)}
                            style={{
                                backgroundColor: "red",
                                marginLeft: 100
                            }}
                            onClick={() => {
                                const temp = [...arr]
                                const [moveduser] = temp.splice(index, 1)
                                temp.unshift(moveduser)
                                setArr(temp)

                            }}>

                            Up
                        </button>
                        <button disabled={(index == arr.length - 1 ? true : false)}
                            style={{
                                backgroundColor: "green",
                                marginLeft: 100
                            }}
                            onClick={() => {
                                if (index < arr.length - 1) {
                                    const temp = [...arr]
                                    const [removedItem] = temp.splice(index, 1);
                                    temp.push(removedItem);
                                    setArr(temp);
                                }

                            }}>

                            down
                        </button>

                    </div>
                );
            })}
        </div>

    )
}