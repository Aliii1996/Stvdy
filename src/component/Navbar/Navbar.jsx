import React from 'react'
import { Navbar , Nav, Container  , Button  } from 'react-bootstrap'
import './Navbar.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,100&family=Roboto:wght@700&family=Spectral:wght@200&display=swap');
</style>



function Navs() {
  return (
    <Navbar className='pt-4 '  expand="lg">
        <Container>
        <a className="navbar-brand" href="#" style={{letterSpacing: '8px'}}><span style={{fontWeight: 900, fontSize: '52px', color: '#fff'}}>ST</span>
        <span style={{fontWeight: 900, color: '#fff', position: 'relative', fontSize: '52px'}}>v<span style={{position: 'absolute', top: '-20px', left: '5px', fontWeight: 100 }}>-</span></span>
        <span style={{fontWeight: 900, fontSize: '52px', color: '#fff'}}>DY</span>
      </a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link className='nav-a' href="#home">Browser</Nav.Link>
      <Nav.Link className='nav-a' href="#link">BootCamp</Nav.Link>
      <Nav.Link className='nav-a' href="#link">How It Works</Nav.Link>
      <Nav.Link className='nav-a' href="#link">Testemonial</Nav.Link>
    </Nav>
    <Nav>
    <Button style={{paddingLeft:'40px' , paddingRight:'40px' }} className='about_us'>About Us</Button>
    </Nav>
    
  </Navbar.Collapse>
        </Container>
 
</Navbar>
  )
}

export default Navs