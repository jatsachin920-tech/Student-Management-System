import React, { useState } from 'react';
import './Signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Account</h2>
        
        <div className="input-group">
          <label htmlFor="username">Username</label>
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
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="student@example.com" 
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
        {formData.userType === 'teacher' && (
  <div className="input-group">
    <label htmlFor="teacherCode">Teacher Verification Code</label>
    <input 
      type="password" 
      id="teacherCode" 
      placeholder="Enter School Code" 
      required 
    />
   </div>
  )}

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;