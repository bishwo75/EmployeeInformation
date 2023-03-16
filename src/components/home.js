import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {Link} from 'react-router-dom'

const Home = () => {
const [employees, setEmployees] = useState([])
useEffect(() => {
   axios.get("http://localhost:4000/employees")
   .then((res)=> 
   setEmployees(res.data))
   .catch((err)=>alert(err))
}, [])

// const handleSubmit= (event) => {
//     event.preventDefault();
//     console.log("about to fetch data")
//     fetchData();
// }
    return (
        <div>
            <h1>Our Employee Details</h1>
            {/* <br/>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-success">Show Details</button>
            </form> */}
  <br/>
            <table className="table" >
                    <thead style={{background: "navy", color: "white"}}>
                        <tr>
                            <th>Emp Id</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return (
                            <tr key={employee.id} style={{ textAlign: "center" }}>
                                <td>{employee.id}</td>
                                <td>{employee.f_name}</td>
                                <td>{employee.location}</td>                                
                                <td>
                                    <Link to={"/viewuser/" + employee.id} className="btn btn-info">View</Link>
                                </td>
                                <td>
                                    <Link to={"/edituser/" + employee.id} className="btn btn-warning">Edit</Link>
                                </td>
                                <td>
                                    <Link to={"/deleteuser/" + employee.id} className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default Home;