import React, { useState, useEffect } from 'react';

export default function Apidata() {



  const [user, setUser] = useState([]);


  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json()
      })
      .then((resJson) => {
        setUser(resJson.data)

      })
  }, []);
  return (
    <div>
      <h1>Fetched data</h1>

      {user.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "#f2f2f2",
              margin: 10,
              borderRadius: 10,
              padding: 5,
              display: "block",
              align: "center"
            }}
          >
            {item.id}.
            <span style={{ margin: 10 }}> {item.email}</span>
            <span style={{ margin: 10 }}>{item.first_name}</span>
            <span style={{ margin: 10 }}> {item.last_name}</span>
            <span style={{ margin: 10 }}>  {item.avatar}</span>
          </div>
        );
      })}

    </div>
  );

}
