import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => response.json())
      .then((data) => {
        setData(data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError(err); 
        setLoading(false); 
      });
  }, []); 

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;