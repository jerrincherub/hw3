import { useState } from "react";

export default function Login()
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  
   
    
    function onButtonClick(){
        if(email='  '){
            console.log("enter email")
        }
    
        if( password>8){
            console.log("Login successfull")
        }
    
    }
  
    return(
        <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <h1 >Welcome back</h1>
        <p>Glad to see you again</p>
        <p>Login to you account below</p>
        
        </div>
        <div className={'inputContainer'}></div>
        <div> Email</div>
        <input type="text" 
        value={email}
        placeholder="Enter email"
        onChange={(event) => {
        setEmail((event.target.value));}}
        />
        <div/>
        <br/>
        <div className={'inputContainer'}></div>
        <div>password</div>
        <input type="text" 
        value={password}
        placeholder="Enter password"
        onChange={(event) => {
        setPassword((event.target.value));}}
        />
        <br/>
        
        <button onClick={onButtonClick}> 
            Login
        </button>
        </div>
)
}
    

        



    


