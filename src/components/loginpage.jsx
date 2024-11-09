import { useState } from "react";

export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMessage] = useState('');



    function onButtonClick() {
        if (email == 'jerrin@gmail' && password.length > 8) {

            setMessage("Login successfull")
        }
        else {
            setMessage("login not successful")
        }

    }

    return (
        <form action="action_page.php" method="post">
            <div >
              <b>Welcome back 
               Glad to see you again.</b>
               </div>
               <div class="container">
                
               <label>Email:</label>
                <input type="text"
                    value={email}
                    placeholder="Enter email"
                    onChange={(event) => {
                        setEmail((event.target.value));
                    }}
                />
                <label>password:</label>
                <input type="text"
                    value={password}
                    placeholder="Enter password"
                    onChange={(event) => {
                        setEmail((event.target.value));
                    }}
                />
                <button type="submit" class="registerbtn">Login</button>
                <button onClick={onButtonClick}>

                    
                </button>
                {msg}
                <p>Dont have an account?Sign up for free</p>
            </div>
            </form>
        



    )

}
