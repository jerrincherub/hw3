import { useState } from "react";
import loginpageimage from "../assets/loginpageimage.jpg";
import { hydrateRoot } from "react-dom/client";

export default function LoginPageApi() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('')

    const handleSubmit =() => {

        const response =  fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data =  response.json();
        console.log('Login successful:', data);
        if (response.ok) {
            setMessageType('success');
            setMessage('Login successful!');
        }
        else {
            setMessageType('error');
            setMessage(data.message || 'Login failed. Please try again.');
        }

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

        <button style={{
            border: "1px solid black",
            color: "red",
            width: 400,
            height: 50,
            padding: 5,
            borderRadius: 10,
            marginLeft: 70,
            backgroundColor: "white",
            margin: 10
        }}
            onClick={onButtonClick}>

            Google Account
        </button>


        <div style={{
            padding: 10,
            margin: 5,
            textAlign: "left",
            marginLeft: 50
        }}>

            Email:
            <div />

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
                        marginLeft: 10,
                    }}
                    type="text"
                    value={password}
                    placeholder="Enter password"
                    onChange={(event) => {
                        setEmail((event.target.value));
                    }}
                />
                <div>

                    <button style={{
                        border: "1px solid black",
                        color: "white",
                        width: 400,
                        height: 50,
                        padding: 5,
                        borderRadius: 10,
                        marginLeft: 10,
                        backgroundColor: "#8F00FF"
                    }}
                        onClick={handleSubmit}>

                        Login
                    </button>
                </div>
                {msg}
                <div style={{
                    padding: 5,
                    margin: 5,
                    marginLeft: 90
                }}>Dont have an account?<span style={{ color: "#8F00FF" }}>Sign up for free</span></div>
            </div>
        </div>
    </div>


)
}
