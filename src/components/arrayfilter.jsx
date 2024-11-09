import { useState } from "react";

export default function ArraysFilter() {
  const [arr, setArr] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [search, setSearch] = useState('')




  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }} />

      </div>
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

      {arr.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      ).map((user, index) => {
        return (
          <div
            style={{
              backgroundColor: "#f2f2f2",
              margin: 10,
              borderRadius: 10,
              padding: 5
            }}
          >
            {index + 1}.{user.name}{user.email}




            <button
              style={{
                backgroundColor: "red",
              }}
              onClick={() => {
                const temp = [...arr]
                temp.splice(index, 1)
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



