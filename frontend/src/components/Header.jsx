import React from 'react'
import {LinkContainer } from 'react-router-bootstrap'
import {Navbar,Nav,Button,Form,FormControl,Container,Row,Col, NavDropdown } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
const Header = () => {
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const logoutHandler= ()=>{
   dispatch(logout())
  }
    return (
       <header>
<Navbar className="navbar navbar-expand-lg navbar-light bg-light">
    <Container>
  <LinkContainer to="/" ><Navbar.Brand>Shopper</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/cart">
      <Nav.Link >Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
      </LinkContainer>

      {userInfo?(
        <NavDropdown title={userInfo.name} id='username'>
          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
      ):(
  <LinkContainer to="/login">
  <Nav.Link >Sign in/Log in<i className="fas fa-user"></i></Nav.Link>
  </LinkContainer>
      )}
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

       </header>
    )
}

export default Header
