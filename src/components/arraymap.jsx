import { useState } from "react";

export default function ArraysMap() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["Apples", "Mango", "Grapes"]);
  const [arr2, setArr2] = useState([
    {
      name: "Akash",
      email: "akash@gmail.com",
      phone: 1234,
      address: "Bangalore",
    },
    {
      name: "Jerrin",
      email: "jerrin@gmail.com",
      phone: 1234,
      address: "Dubai",
    },
    {
      name: "person3",
      email: "person3@gmail.com",
      phone: 1234,
      address: "USA",
    },
  ]);

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count {count}
      </button>

      <br />

      <input className="border border-1" />
      <input className="border border-1" />
      add
      {arr2.map((obj, index) => {
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
            <span style={{ marginLeft: 100 }}>{obj.address}</span>
            <button
              style={{
                backgroundColor: "red",
              }}
            >
              delete
            </button>
            <button>View details</button>
          </div>
        );
      })}
    </div>
  );
}  