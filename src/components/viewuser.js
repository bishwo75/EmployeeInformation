import React, { useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Viewuser = () => {
    const [employees, setEmployees] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        axios.get("http://localhost:4000/employees/" + id)
        .then((res) => setEmployees(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className="container" style={{ textAlign: "left" }}>
      <br />
      <ul className="list-group">
        <li className="list-group-item active">Employee Details</li>
        <li className="list-group-item">Employees ID : {employees.id}</li>
        <li className="list-group-item">First Name : {employees.f_name}</li>
        <li className="list-group-item">Last Name : {employees.l_name}</li>
        <li className="list-group-item">
          Designation : {employees.designation}
        </li>
        <li className="list-group-item">Location : {employees.location}</li>
      </ul>
      <br />
      <Link to={"/home"} className="btn btn-primary">Home</Link>
    </div>
  );
}
export default Viewuser;