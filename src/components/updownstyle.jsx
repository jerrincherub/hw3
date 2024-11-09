import { useState } from "react"
export default function StyleUpDown() {
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
                            textAlign: "left",
                            height: 200,
                            width: 300,
                            borderRadius: 20,
                            padding: 5,
                            display: "inline-flex",
                            shadowColor: 'D6D6D4',
                            shadowOpacity: 0.6,
                            shadowRadius: 3.84,
                            marginRight: 10,
                            boxShadow: 10

                        }}
                    >

                        <span style={{ marginLeft: 10 }}> {index + 1}</span>.<b><span style={{ display: 'block' }}>{obj.name}</span></b>
                        <span style={{ textAlign: "right", marginLeft: 80, display: "block" }}>
                            {obj.email}</span>


                        <button disabled={(index == 0 ? true : false)}
                            style={{
                                display: index == 0 ? 'none' : "block",
                                marginLeft: -80

                            }}
                            onClick={() => {
                                if (index > 0) {
                                    const newUsers = [...arr];
                                    const temp = newUsers[index];
                                    newUsers[index] = newUsers[index - 1];
                                    newUsers[index - 1] = temp;
                                    setArr(newUsers);
                                }
                            }}>
                            Up
                        </button>



                        <button disabled={(index == arr.length - 1 ? true : false)}
                            style={{
                                display: index == arr.length - 1 ? 'none' : "block",
                                marginLeft: -4

                            }}
                            onClick={() => {
                                if (index < arr.length - 1) {
                                    const newUsers = [...arr];
                                    const temp = newUsers[index];
                                    newUsers[index] = newUsers[index + 1];
                                    newUsers[index + 1] = temp;
                                    setArr(newUsers);
                                }

                            }}>

                            Down
                        </button>


                    </div>
                );
            })}
        </div>

    )
}