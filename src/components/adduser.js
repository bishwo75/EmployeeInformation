import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Adduser = () => {
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const data = {
    id: id,
    f_name: firstname,
    l_name: lastname,
    designation: designation,
    location: location,
  };
function Submit (e){
    e.preventDefault();
    axios.post("http://localhost:4000/employees", data)
    .then(alert("Employee added Successfully"),navigate('/home'))
  }
  const onCancel = () => {
    navigate('/home')
  }
 return (
    <div className="container">
      <h3>Enter Employee Data</h3>
      <form style={{background:"skyblue"}}>
        Enter ID:
        <br />
        <input
          type="number"
          style={{ width: "300px" }}
          placeholder="Enter the ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /><br/>
        Enter firstname:
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          placeholder="Enter First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        /><br/>
        Enter Last Name:
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          placeholder="Enter Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        /><br/>
Enter designation:
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          placeholder="Enter Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        /><br/>
        Enter location:
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /><br/><br/>
        <button onClick={Submit} className="btn btn-success"> Add Employee</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={onCancel} className="btn btn-success"> Cancel</button>
        <br />
        <br />
      </form>
</div>
  );
};
export default Adduser;


