import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import {useNavigate, Link} from "react-router-dom";

const Topnav = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDetails')));
  const [loginStatus, setLoginStatus] = useState(localStorage.getItem('loginStatus'));
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setLoginStatus(false);
    navigate("/");
  }
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('userDetails'));
      const loginStatus = localStorage.getItem('loginStatus');
      setUser(user);
      setLoginStatus(loginStatus);
      const onStorage = () => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        const loginStatus = localStorage.getItem('loginStatus');
        setUser(user);
        setLoginStatus(loginStatus);
        console.log('test')
      };
  
      window.addEventListener('storage', onStorage);
  
      return () => {
          window.removeEventListener('storage', onStorage);
      };
  }, [])

  return (
    <Navbar  bg="warning" className='nb-3'>
        <Container>
            <Navbar.Brand href="/">
              <b>
                <em>Vista DB</em>
              </b>
            </Navbar.Brand>            
           <div>
           {loginStatus && <span>User:  <b>{user.username}&nbsp;&nbsp;&nbsp;&nbsp;</b></span> }
          { loginStatus && <Link to={"/adduser"} style={{ background: "navy", color: "white", padding: "4px", borderRadius: "5px"}}>
              Add User</Link>} &nbsp;&nbsp;&nbsp;&nbsp;
              {loginStatus && <button onClick={logout} style={{ background: "navy", color: "white", padding: "1px", borderRadius: "5px"}}>
             Logout</button> }
           </div>
            {/* <Button>Sign-Up</Button> */}
        </Container>
    </Navbar>
  )
}
export default Topnav;