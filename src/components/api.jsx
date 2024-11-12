import React, { useState } from 'react';

export default Login() {
  // State to store the email, password, and API response
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Make API call
      const response = await fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      // Check if login is successful
      if (response.ok) {
        setMessage(`Login Successful for email: ${data.email}`);
      } else {
        setMessage(`Error: ${data.message || 'Invalid credentials'}`);
      }
    } catch (error) {
      setMessage('Error: Unable to reach the API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>

      {/* Show message or loading indicator */}
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

