import { useEffect, useState } from "react";
export default function Flightbooking() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showform, setShowForm] = useState(false)
  const [economylist, setEconomy] = useState([])
  const [businesslist, setBusiness] = useState([])
  const [msg, setMsg] = useState('')
  const [category, setCategory] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    setName('')
    setEmail('')
    setShowForm(false);

  }
  useEffect(() => {
    if (age > 40) {


      setCategory('added to Business class')
    }
    else if (age > 0 && age <= 40) {

      setCategory('added to economy class')

    }
    else {
      setCategory('')
    }
  }, [age])
  return (
    <div>
      <button style={{ color: "red" }} onClick={() => setShowForm(true)}>Add New User</button>
      {showform && (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <input
                type="text"
                placeholder="Enter the name"
                value={name}
                onChange={(event) => { setName(event.target.value) }}
              />
            </div>
            <div>
              <label>Age :</label>
              <input
                type="number"
                placeholder="Enter the age"
                value={age}
                onChange={(event) => { setAge(event.target.value) }}

              />
              {name} {category}
            </div>

            <button disabled={(name.length == 0 ? true : false)}
              style={{
                margin: 5,
                backgroundColor: "grey"
              }} type="button" onClick={() => {
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

              }}
            >Add</button>
            <button style={{
              margin: 5,
              backgroundColor: " grey"

            }} type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>

          </form>
        </div>

      )}
      <h2 style={{ fontSize: 20, margin: 5 }}>Economy Class</h2>
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


      <h2 style={{ fontSize: 20, margin: 5 }}>Business Class</h2>
      {businesslist.map((obj, index) => {
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
                const deleteditem = businesslist.splice(index, 1)[0]
                setBusiness(businesslist)
                setEconomy([...economylist, deleteditem])
              }}>
              Updown
            </button> </div>
        );
      })}



    </div>

  )
}
