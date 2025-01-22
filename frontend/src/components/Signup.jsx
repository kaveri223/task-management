import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comformpassword, setComformPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim() || !comformpassword.trim()) {
      alert('All fields are required. Please fill in all inputs.');
      return;
    }

    if (password !== comformpassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Signup successful! You can now log in.');
    navigate('/login');
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          margin: "0 auto",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Signup</h2>
        <br />
        <label>UserName:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <label>Comform Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter the Comform Password"
          value={comformpassword}
          onChange={(e) => setComformPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <br />
        <button
          type="submit"
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
        >Signup</button>
      </form>
    </div>
  );
};

export default Signup;
