import { useState } from "react"

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [message,setMessage]=useState('')
    const [issucess, setIsSucess] = useState(null)
    const [user,setUser]=useState('')

    const handleSubmit =async (e) => {
        e.preventDefault()

       const response= await fetch('https://www.greatfrontend.com/api/questions/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, email: email,msg: msg }),
        })
       if(response.ok){
        setMessage("Congratulation you have suceesfully submitted the form")
        setName('')
        setEmail('')
        setMsg('')

       }
       else{
        setMessage("Error in submission")
       }

            //.then((res) => res.json())
          //  .then((resJson) => {
            //    setUser(resJson.data)

              //  if (resJson.token) {
                 //   setIsSucess("true")
                //    setMessage("Congratulation")
              //  }
             //   else {
             //       setIsSucess("false")
                 //   setMessage(" error in submission")
               // }
            


    }


return (

    <div>
        <div style={{
            padding: 10,
            marginLeft: 180,
            fontSize: 30


        }} >
            <b>Hello
            </b>
        </div>

        <form onSubmit={handleSubmit}>

            <div>
                <input
                    type="text"
                    placeholder="Enter the name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
            </div>
            <div>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter the email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />

            </div>
            <div>
                <textarea
                   id="message"
                    value="msg"
                
                    placeholder="Enter the message"
                    onChange={(e) => {
                        setMsg(e.target.value)
                    }} />

            </div>
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

                    Submit
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


        </form>
    </div>

)
}