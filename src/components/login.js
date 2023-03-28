import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const loginStatus = localStorage.getItem('loginStatus');
    if(user && loginStatus) {
      navigate("/home");
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!props.data.username || !props.data.password) {
      props.setStatus(false);
      alert("Enter both Username and Password");
    } else if (
      props.data.username === "bishwo" &&
      props.data.password === "Bunu2023$$"
    ) {
      props.setStatus(true);
      localStorage.setItem('userDetails', JSON.stringify(props.data));
      localStorage.setItem('loginStatus',true);      
      navigate("/home");
      window.dispatchEvent(new Event("storage"));
    } else {
      props.setStatus(false);
      alert("Invalid Username or Password");
    }
  };
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          height: "200px",
          backgroundColor: "#566573",
          color: "white",
          padding: "15px",
          marginTop: "150px",
          marginLeft: "300px",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Username : </label>
          <input
            type="text"
            id="username"
            name="username"
            value={props.data.username}
            onChange={props.handleChange}
            placeholder="Enter user Name"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={props.data.password}
            onChange={props.handleChange}
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Log-in
        </button>
      </form>
    </div>
  );
};
export default Login;
