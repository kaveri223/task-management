import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      navigate('/tasks');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}
        style={{
          border: "2px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          height: "300px",
          margin: "0 auto",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <button type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "50%",
            borderRadius: "4px",
            margin: "10px auto",
            display: "block"
          }}
        >Login</button>
        <br />
      </form>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

export default Login;
