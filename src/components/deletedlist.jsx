import { useState } from "react";

export default function Deletedlist() {
  const [arr, setArr] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [list, setDelete] = useState([])
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
              borderRadius: 10,
              padding: 5
            }}
          >
            {index+1}.{obj.name}<span style={{ marginLeft: 100 }}>{obj.email}</span>




            <button
              style={{
                backgroundColor: "red",
              }}
              onClick={() => {
                const deleteditem = arr.splice(index, 1)[0]
                console.log(deleteditem)
                setArr(arr)
                setDelete([...list, deleteditem])
              }}>

              delete
            </button>

          </div>
        );
      })}
      <h2>Delete List:</h2>
      {list.map((user, index) => (
        <li key={index}>{user.name}{user.email}</li>))}

    </div>

  )
}