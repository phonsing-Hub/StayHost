import React, { useState } from 'react';
import '../../public/css/login.css';

function Alert({ message }) {
  return (
    <div className="alert alert-danger">
      {message}
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Check if the response contains any data
      if (data.username != null) {
        // Assuming the server responds with a token or some indicator of successful login
        setIsLoggedIn(true);
        console.log('Login successful');
        // Redirect to Dashboard upon successful login
        //history.push('/Dashboard');
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  return (
<div className='contener'>
      <div className="item1">
        <div className="box"></div>
        <div className="text">
          <h1>STAYHOST</h1>
          <h4>Eleven and Simplify</h4>
        </div>
        <div className="img">
          <img src="/img/image0.jpg" alt="Image Description" />
        </div>
      </div>

      <div className="item2">
        <div className="logo">
          <img src="/img/Logo_Stayhost_.png" alt="Image Description" />
        </div>
        <div className="input">
          <h2>USER LOGIN</h2>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-circle"></i></span>
            <input type="text" className="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-file-lock"></i></span>
            <input type="password" className="form-control" placeholder="password" aria-label="Password" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {showAlert && <Alert message="Incorrect username or password" />}
          {isLoggedIn && <div>Login successful!</div>}
          <button className='btn' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>

  );
}

export default Login;
