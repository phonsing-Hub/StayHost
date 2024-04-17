import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
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
  const [pass, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin', {
        username,
        pass
      });
      localStorage.setItem('Admin', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      setShowAlert(true);
      console.error('Error during login:', error);
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
            <input type="password" className="form-control" placeholder="password" aria-label="Password" aria-describedby="basic-addon1" value={pass} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {showAlert && <Alert message="Incorrect username or password" />}
          <button className='btnlogin' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>

  );
}

export default Login;
