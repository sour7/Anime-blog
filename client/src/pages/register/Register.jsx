import React, { useState } from "react";
import axios from "axios"
import "./register.css";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange=(e)=>{
    setInput((prev)=>({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }
const navigate=useNavigate()
const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res  = await axios.post('https://anime-blog-server.onrender.com/api/v1/user/register',{username:input.name, email:input.email, password:input.password})
      if(res.data.success){
        toast.success('user registered successfully')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
}


  return (
    <div className="reg-container">
      <div className="reg-wrapper">
      <form onSubmit={handleSubmit}>
      <div className="reg-form">
          <div className="reg-field">
            <label htmlFor="name" className="reg-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="reg-inputs"
              value={input.name}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="reg-field">
            <label htmlFor="email" className="reg-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="reg-inputs"
              value={input.email}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="reg-field">
            <label htmlFor="password" className="reg-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="reg-inputs"
              value={input.password}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <button className="register" type="submit">Register</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
