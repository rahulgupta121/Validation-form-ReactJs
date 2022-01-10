import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';

const RegistrationPage = () => {
    const initialValue= {username: "",lastName: "", email: "", password:"", cnfpassword:""};
    const [formValues, setValues] =useState(initialValue);

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setValues({...formValues, [name]: value });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
         <div id='background-main' className='background-main-div '>
          <form onSubmit={handleSubmit}>
              <pre>{JSON.stringify(formValues,undefined, 2)}</pre>
         <Container className='body-container justify-content-center '>
                <h3 className='register-heading text-center'>Register Form</h3>
                <p className='text-center'>Create your account. It's free and only takes a minute.</p>
                            
            <Row className='name'>
                <Col className='col-sm-12 col-md-6 col-lg-6 col-for-name'>
                    <div className='field'>
                        <label className='label-name'> Name </label><br/>
                        <input type='text' name='username' placeholder='Name ' className='name-box' value={formValues.username} onChange={handleChange}/>
                    </div>
                
                </Col>
                <Col className='col-sm-12 col-md-6 col-lg-6 col-for-Lname'>
                    <div className='field'>
                          <label className='label-name'>Last Name </label>
                <input type='text' name='lastName'  placeholder='Last Name ' className='Lname-box' value={formValues.lastName} onChange={handleChange}/>
                    </div>
              
                </Col>
 
            </Row>
            <div className='field'>
            <label className='label-name Email'> Email I'D </label> <br/>
                <input placeholder='Email' name='email' type='text' className='email-box' value={formValues.email} onChange={handleChange}/>      
            </div> 
            
            <div className='field'>
            <label className='label-name Password'> Password </label><br/>
            <input placeholder='Password' name='password' type='password' className='password-box' value={formValues.password} onChange={handleChange}/>
            </div> 

            <div className='field'>
            <label className='label-name cnf-password'> Confirm Password </label><br/>
            <input placeholder='Confirm Password' name='cnfpassword' type="password" className='confirm-password-box' value={formValues.cnfpassword} onChange={handleChange}/>
            </div>

            <div className='submit-btn-div mt-3'>
            <Button className='submit-btn pl-5 pr-5 mb-3' variant="primary">Submit</Button>{' '}
            </div>

            </Container>
            </form>
                </div>
          
        </>
    )
}

export default RegistrationPage
