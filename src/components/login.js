import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
const [status, setStatus]= useState(null);
    const [data, setData] = useState({
        username: "",
        password: "",
    })
    const handleChange =(event) =>{
        let {name, value} = event.target;//we can do other way too, don't put name on input and have
        // onChange=e.target.value but how do we st the state here?
        setData({...data, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!data.username || !data.password){
            setStatus(false);
            alert('Enter both Username and Password')
        } else {
            setStatus(true);
            alert("Logged in Successfully");
            navigate("/home");
        }
}
return (
      <div className="container">
        <form onSubmit={handleSubmit}
          style={{
            width: "60%",
            height: "200px",
            backgroundColor: "#566573",
            color: "white",
            padding: "15px",
            marginTop: "150px",
            marginLeft: "300px"
          }}>
          <div className="form-group">
            <label htmlFor="name">Username : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleChange}
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
              value={data.password}
              onChange={handleChange}
            placeholder="Enter Password"
            />
          </div>
          <br />
          <button type="submit" className='btn btn-primary'>Log-in</button>
        </form>
      </div>
    );
}
export default Login;