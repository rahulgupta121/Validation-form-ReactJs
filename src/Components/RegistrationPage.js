import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
const RegistrationPage = () => {
    return (
        <>
         <div className='background-main-div '>
              

             
         <Container className='body-container justify-content-center '>
                <h3 className='register-heading text-center'>Register Form</h3>
                <p>Create your account. It's free and only takes a minute.</p>
                            
            <Row>
                <Col className='col-sm-12 col-md-6 col-lg-6 col-for-name'>
                <input placeholder='Name '/>
                </Col>
                <Col className='col-sm-12 col-md-6 col-lg-6 col-for-Lname'>
                <input placeholder='Last Name '/>
                </Col>
 
            </Row>
            <Row>
                <Col  className='col-sm-12 col-md-12 col-lg-12 col-email'><input placeholder='Email' className='email-box'/></Col>               
            </Row> 
            
            <Row>
                <Col className='col-sm-12 col-md-12 col-lg-12 col-password'><input placeholder='Password' className='password-box'/></Col>
            </Row> 

            <Row>
                <Col className='col-sm-12 col-md-12 col-lg-12 col-confirm-password'><input placeholder='Confirm Password' className='confirm-password-box'/></Col>
            </Row> 
            <Button variant="primary">Primary</Button>{' '}

            </Container>
 
                </div>
          
        </>
    )
}

export default RegistrationPage
