import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav,  Container, Col, Row,} from 'react-bootstrap';
import LOGO from '../assets/Images/logo.svg'
import Button from '../Components/Commons/Button'
import hamburger from '../assets/Images/hamburger.svg'

const Header = () => {
  const [openmenu, setopenmenu] = useState(false)
  const menuhandler=()=>{
    setopenmenu(!openmenu)
  }
  return (
      <header className=' sticky-top _Flex'>
        <Container  className='p-2 m-0'>
        <Row className='header m-0 '>
          <Col sm={2} className='col-2'><img src={LOGO} className='logo'/></Col>
          <Col  className='col-10 d-block d-lg-none text-end p-0' onClick={menuhandler}><img src={hamburger}/></Col>
          <Col sm={12} lg={10} className='header-links d-lg-flex _Flex justify-content-lg-end justify-content-start py-5 p-lg-0' style={{display:openmenu? 'block': 'none'}}>
            <ul className='m-0 flex-column flex-lg-row'><li>About</li><li>Services</li><li>Blogs</li><li>FAQ</li></ul>
            <Col sm={3} className='p-0 m-0 _Flex justify-content-end d-none d-lg-flex'><Button data={"Contact Me"}/></Col>
          </Col>
        </Row>
      </Container>
      </header>
  )
}

export default Header