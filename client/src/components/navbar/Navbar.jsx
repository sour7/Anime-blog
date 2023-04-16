import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import Form from "../form/Form";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);
  // const navigate = useNavigate();
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 1) {
      setOpen(!open);
    }else{
      setOpen(false);
    }
  };



  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-title">
            <Link to="/" className="route">
              <h3   onClick={(e)=>setOpen(false)}>Anime Blog</h3>
            </Link>
          </div>

          <div className="navbar-menu">
       
              <button
                className={` btn ${selectedButton === 1 ? "selected" : ""}`}
                onClick={() => handleButtonClick(1)}
              >
                Create Blog
              </button>
       
      
              <Link to="/register" className="route">
                <button
                  className={` btn ${selectedButton === 2 ? "selected" : ""}`}
                  onClick={() => handleButtonClick(2)}
                >
                  Sign Up
                </button>
              </Link>
       
          
              <Link to="/login" className="route">
                <button
                  className={` btn ${selectedButton === 3 ? "selected" : ""}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Login
                </button>
              </Link>
      

         
          </div>
        </div>
      </div>
      {
        open&&
      <Form  open={open} setOpen={setOpen} data={"submit"}/>
      }
    </>
  );
};

export default Navbar;
