import { useState } from "react";
import loginpageimage from "../assets/loginpageimage.jpg";
import { hydrateRoot } from "react-dom/client";

export default function LoginPageApi() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [issucess, setIsSucess] = useState(null)
    const onButtonClick = () => { }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)

                if (resJson.token) {
                    setIsSucess("true")
                    setMessage("Login successful")
                }
                else {
                    setIsSucess("false")
                    setMessage("Login not successfull invalid credentials")
                }
            })


    }


    return (
        <div>
            <div >
                <img style={{
                    width: 50,
                    marginLeft: 250

                }}
                    src={loginpageimage} />

            </div>
            <div style={{
                padding: 10,
                marginLeft: 180,
                fontSize: 30


            }} >
                <b>Welcome back
                </b>
            </div>
            <div style={{

                marginLeft: 200,
                color: "grey"

            }} >

                Glad to see you again.
            </div>
            <div style={{

                marginLeft: 200,
                color: "grey"
            }}>Login to your account below</div>


            <div />
            <form onSubmit={handleSubmit}>
                <div style={{
                    padding: 10,
                    margin: 5,
                    textAlign: "left",
                    marginLeft: 50
                }}>

                    Email:


                    <input style={{
                        border: "1px solid black",
                        color: "red",
                        width: 400,
                        height: 50,

                        borderRadius: 10,
                        marginLeft: 10,

                    }}
                        type="text"
                        value={email}
                        placeholder="Enter email"
                        onChange={(event) => {
                            setEmail((event.target.value));
                        }}
                    />

                    <div>
                        <label>password:</label> <div />
                        <input
                            style={{
                                border: "1px solid black",

                                width: 400,
                                height: 50,
                                padding: 10,
                                borderRadius: 10,
                                marginLeft: 50,
                            }}
                            type="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(event) => {
                                setPassword((event.target.value));
                            }}
                        />
                        <div>

                            <button disabled={(email.length == 0 ? true : false)}
                                style={{
                                    border: "1px solid black",
                                    color: "white",
                                    width: 400,
                                    height: 50,
                                    padding: 5,
                                    borderRadius: 10,
                                    marginLeft: 50,
                                    backgroundColor: "#8F00FF"
                                }}
                                onClick={handleSubmit}>

                                Login
                            </button>
                        </div>

                        {message && (
                            <div
                                style={{
                                    color: issucess ? 'green' : 'red',
                                    marginTop: '10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {message}
                            </div>
                        )}
                        <div style={{
                            padding: 5,
                            margin: 5,
                            marginLeft: 90
                        }}>Dont have an account?<span style={{ color: "#8F00FF" }}>Sign up for free</span></div>
                    </div>
                </div>
            </form>
        </div>


    )
}
