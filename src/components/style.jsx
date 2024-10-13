import { useState } from "react";

export default function Styling() {
    const [margin, setMargin] = useState(0);
    return (
        <div
          style={{
            backgroundColor: "#4d4dff",
            padding: 10,
            margin: margin,
            color: "#0000ff",
            height: "100vh",
          }}
        >
          <input 
            value={margin}
            type="number"
            placeholder="enter margin..."
            onChange={(event) => {
              setMargin(parseInt(event.target.value));
            }}
          />
        </div>
      );
    }  