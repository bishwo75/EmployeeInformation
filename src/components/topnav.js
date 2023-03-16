import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

const Topnav = () => {
  return (
    <Navbar  bg="warning" className='nb-3'>
        <Container>
            <Navbar.Brand href="/">
              <b>
                <em>Vista DB</em>
              </b>
            </Navbar.Brand>
            <Link to={"/adduser"} style={{ background: "navy", color: "white", padding: "8px", borderRadius: "5px"}}>
              Add User</Link>
            {/* <Button>Sign-Up</Button> */}
        </Container>
    </Navbar>
  )
}
export default Topnav;