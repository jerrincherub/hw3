import { useState } from "react";

export default function ArraysMap() {
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
        <button disabled={(name.length==0?true:false)}
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
              borderRadius: 10,
              padding: 5
            }}
          >
            {index}.{obj.name}{obj.email}




            <button
              style={{
                backgroundColor: "red",
              }}
              onClick={() => {
                const temp = [...arr]
                temp.splice(index,1)
                setArr(temp)
              }}>

              delete
            </button>
            
          </div>
        );
      })}

    </div>

  )
}