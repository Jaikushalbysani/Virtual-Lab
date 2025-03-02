import React from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
        
        <p className="register-link">
          Do not have an account? <a href="/register">Register here</a>
        </p>
        <p className="forgot-password-link">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login; 