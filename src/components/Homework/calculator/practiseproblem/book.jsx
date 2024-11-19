import { useEffect, useState } from "react";

export default function Book() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [form, setForm] = useState('false')
    const [message, setMessage] = useState('')
    const [economylist, setEconomy] = useState([])
    const [businesslist, setBusiness] = useState([])
    const handlesubmit = (e) =>{
        e.preventDefault();
        setName('')
        setEmail('')
        setAge('')
    
    setForm(false);
    }
    useEffect(() => {
        if (age > 40) {
    
    
          setMessage('added to Business class')
        }
        else if (age > 0 && age <= 40) {
    
          setMessage('added to economy class')
    
        }
        else {
          setMessage('')
        }
      }, [age])
   
    return (
        <div>
            <button style={{color:"red"}}onClick={()=>{
                setForm(true)
            }}>
                Add newuser
            </button>
      {form && (     
        <div>
            <form onSubmit={handlesubmit}>
            <div>
                <input
                    type="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)} />

            </div>
          
            <div>
                <input
                    type="number"
                    placeholder="Enter the age"
                    value={age}
                    onChange={(event) =>
                        setAge(event.target.value)} />
{name}{message}
            </div>
            
            <button disabled={(name.length == 0 ? true : false)}
                onClick={() => {
                    if (age < 40) {
                        setEconomy([...economylist, { name, age }])
                        setName('')
                        setAge('') 

                    }
                    else {
                        setBusiness([...businesslist, { name, age }])
                        setName('')
                        setAge('')
                    }


                }}>
                Add
            </button>
            <button onClick={()=>{
                setForm(false)
            }}>
                Cancel
            </button>
        
        </form>
        </div>
    )}
             {economylist.map((obj, index) => {
        return (
          <div
            style={{
              backgroundColor: "#f2f2f2",
              margin: 10,
              borderRadius: 10,
              padding: 5,
            }}
          >
            {index + 1}.{obj.name}
            <span style={{ marginLeft: 100 }}>{obj.age}</span>
            <button
              style={{
                backgroundColor: "red",
                margin: 10
              }}
              onClick={() => {
                const deleteditem = economylist.splice(index, 1)[0]

                setEconomy(economylist)
                setBusiness([...businesslist, deleteditem])
              }}>


              Upgrade
            </button> </div>
        );
      })}
            

        </div>
    )











}