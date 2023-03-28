import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Deleteuser = () => {
    const [employees, setEmployees] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/employees/' + id)
        .then((res)=> setEmployees(res.data))
        .catch((err) => console.log(err))
    })
    
    function deluser() {
        axios.delete('http://localhost:4000/employees/' + id)
        .then(alert("Employee Information Deleted"), navigate('/home'))        
    };

    const onCancel = () => {
        navigate('/home')
    }
    return ( 
        <div className='container' style={{ textAlign:'left'}}>
            <ul className='list-group'>
                <li className='list-group-item active'>Employee Details</li>
                <li className='list-group-item'>Employees ID : {employees.id}</li>
                <li className='list-group-item'>First Name: {employees.f_name}</li>
                <li className='list-group-item'>Last Name: {employees.l_name}</li>
                <li className='list-group-item'>Designation: {employees.designation}</li>
                <li className='list-group-item'>Location: {employees.location}</li>
            </ul>
            <br />
            <br />
            <button onClick={deluser} className='btn btn-danger'>Delete Employee</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={onCancel} className='btn btn-danger'>Cancel</button>
        </div>
      
     );
}
 
export default Deleteuser;
