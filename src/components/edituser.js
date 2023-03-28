import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Edituser = () => {
  const [idd, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  
  const {id} = useParams()//It will display the data of which ID/row you have clicked
  const data = {
    id: idd,
    f_name: firstname,
    l_name: lastname,
    designation: designation,
    location: location,
  };
    useEffect(()=> {
    axios.get("http://localhost:4000/employees/" + id)
    .then((res)=>{        
        console.log(res);
        setId(res.data.id);
        setFirstname(res.data.f_name);
        setLastname(res.data.l_name);
        setDesignation(res.data.designation);
        setLocation(res.data.location); 
    })
    },[]);
    function Submit(e) {
        e.preventDefault();
        axios.put('http://localhost:4000/employees/' + id, data)
        .then(alert("Employee Information Updated"), navigate('/home'))        
    };

    return ( 
        <div className='container' style={{ textAlign:'left'}}>
            <h3>Update Employee Data</h3>
            <form style={{background:"skyblue"}}>
        Enter ID:
        <br />
        <input
          type="number"
          style={{ width: "300px" }}
          placeholder="Enter the ID"
          value={idd}
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
        <button onClick={Submit} className="btn btn-success"> Submit Edit</button>
        <Link to={"/home"} className="btn btn-primary" style={{marginLeft: "100px"}}>Home</Link>
      </form>
           
        </div>      
     );
}
 
export default Edituser;