import React, { useState } from "react";
import axios from "axios"

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../../redux/userSlice'
import toast from 'react-hot-toast';
const Login = () => {
  const dispatch= useDispatch()
  const [input, setInput] = useState({
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
      const res  = await axios.post('https://anime-blog-server.onrender.com/api/v1/user/login',{email:input.email, password:input.password})
      if(res.data.success){
        localStorage.setItem('userId', res.data?.user._id)
        dispatch(login({
          email:input.email,
          loggedIn:true
         
        }))
        toast.success('user loggedin successfully')
        navigate('/')
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
              required={true}
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
              required={true}
            />
          </div>
          <button className="register" type="submit">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
