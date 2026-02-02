import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
import './Login.css'; 

const Login= () => {
  const navigate = useNavigate(); // 2. navigate function initialize karein

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // 3. Conditional Navigation Logic
    if (formData.userType === 'student') {
      // Agar student hai toh student dashboard par bhejein
      navigate('/student');
    } else if (formData.userType === 'teacher') {
      // Agar teacher hai toh teacher dashboard par bhejein
      navigate('/teacher');      
    } else {
      alert("Please select a User Type!");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div className="input-group">
          <label htmlFor="username">UserName</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username}
            onChange={handleChange}
            placeholder="username" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="userType">User Type</label>
          <select 
            id="userType" 
            value={formData.userType} 
            onChange={handleChange} 
            required
          >
            <option value="" disabled>Select Type</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {/* Note: onClick ki zarurat nahi hai, form 'onSubmit' se handle hoga */}
        <button type="submit" className="signup-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;