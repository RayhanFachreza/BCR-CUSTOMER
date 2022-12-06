import React from 'react'
import './style.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Loginkanan from '../../assets/images/login.svg'
import Logologin from '../../assets/images/logo.svg';
import Closelogo from  '../../assets/images/close.svg';


const Signin = () => {
  return (
    <div className="login">
        <Container fluid>
            <Row>
                <Col className="login-kiri" sm={12} lg={6} xl={6}>
                    <div className="login-box">
                        <div className="login-konten">
                            <div className="logo-login">
                            <a href="/"><img src={Logologin} alt="BCR" className='homelogo' /></a>
                            <img src={Closelogo} alt="close" className='closelogo'/>
                            </div>
                            <h1>Welcome Back!   </h1>
                            <Form>
                            <Form.Group className="mb-3 email" controlId="formBasicEmail">
                                <Form.Label>
                                    <h3>Email</h3>
                                </Form.Label>
                                <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                                {/* <Form.Text className="text-muted">
                                We'll........... nev,,,,,,,er share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3 password" controlId="formBasicPassword">
                                <Form.Label> 
                                    <h3>Password</h3>
                                </Form.Label>
                                <Form.Control type="password" placeholder="6+ karakter  " />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" size="lg">
                                    <h2>Sign In</h2>
                                </Button>
                            </div>
                            </Form>
                            <div className="bawah-button">
                                <h3>Don’t have an account?</h3> 
                                <h4><a href="">Sign Up for free</a></h4>
                                
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="login-kanan" sm={0} lg={6} xl={6}>
                    <img src={Loginkanan} alt="Login" title='loginpage'      />
                </Col>
            </Row>
         </Container>
    </div>    
  )
}

export default Signin