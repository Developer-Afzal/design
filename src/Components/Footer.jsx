import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import contactLogo from '../assets/Images/contactLogo.svg'
import logo from '../assets/Images/logo.svg'
import facebook from '../assets/Images/facebook.svg'
import linkedin from '../assets/Images/linkedin.svg'
import internet from '../assets/Images/internet.svg'
import instagram from '../assets/Images/instagram.svg'
import Be from '../assets/Images/Be.svg'

const Footer = () => {
  return (
   <Container fluid className='pt-5'>
    <Row>
      <Col sm={12} className='text-center'>
        <p className='small-heading'>Have you project in mind?</p>
        <p className='heading'>Let’s Make Something <br/> Great Together!</p>
        <img src={contactLogo} className='py-5'/><br/>
        <img src={logo}/>
        <div className='_Flex justify-content-between justify-content-sm-center py-5 gap-sm-5'>
          <img src={facebook}/>
          <img src={linkedin}/>
          <img src={internet}/>
          <img src={instagram}/>
          <img src={Be}/>
        </div>
        <hr className='d-none d-sm-block'/>
      </Col>
    </Row>
    <Row>
        <Col sm={6} className='col-12 ps-sm-5 text-center text-sm-start'>
          <p>© 2023 Ideapeel Inc. All Rights Reserved</p>
        </Col>
        <Col className='col-12 d-sm-none'><hr/></Col>
        <Col sm={6} className='col-12 text-center text-sm-end pe-sm-5'>
          <p>Privacy Policy   |   Terms and Conditions</p>
        </Col>
    </Row>
   </Container>
  )
}

export default Footer