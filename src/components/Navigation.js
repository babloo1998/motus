import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        return(
            <div>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src="https://i.ibb.co/zZBnK4t/logo.png" alt="logo" style={{height:"40px",width:"150px"}}></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#customers">Customer</Nav.Link>
      <Nav.Link href="#reports">Reports</Nav.Link>
      <Nav.Link href="#help">Help Centers</Nav.Link>
    </Nav>
    <div>
    <i className="fas fa-search" style={{color:"grey",fontSize:"25px",paddingRight:"25px"}}></i>
    <i className="far fa-user-circle" style={{color:"grey",fontSize:"25px",paddingRight:"25px"}}></i>
    </div>
  </Navbar>
            </div>
        )
    }
}

export default Navigation;