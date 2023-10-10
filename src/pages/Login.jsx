import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Submitted:', formData);
    location.replace('/MenuAdministrar');
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img
          src="logo.png"
          alt="Login Image"
          className="login-image"
        />
      </div>
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="button" type="submit">Login</button>
        </form>
      </div>
      </div> 
  )
}

export default Login