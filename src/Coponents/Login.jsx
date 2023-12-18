import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate()  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async(e)=>{
        e.preventDefault()
        try {
            if(!email || !password){
                alert("Enter the email and password")
            } 
            else{
                await axios.post('http://localhost:8000/login',{password,email})
                alert('login Sucessful')
                navigate('/')
            }
        } catch (error) {
            alert('Wrong email or password')
        }
    }

  return (
    <>
      <Container>
        <Row className="p-5">
          <Col md={12} lg={4}></Col>
          <Col md={12} lg={4} className="card p-4 text-black">
            <h1 className="text-center mb-4">Login</h1>

            <div>
              <MDBInput
                className="mb-4"
                type="email"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <MDBInput
                className="mb-4"
                type="password"
                id="form1Example1"
                label="Enter the password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <MDBBtn className="form-control" onClick={handleLogin}>Login</MDBBtn>
            </div>
            <div className="my-4">
              <h4>Dont have a account?</h4>
            </div>

            <Link to={"/register"}>
              <MDBBtn className="form-control btn btn-dark">Register</MDBBtn>
            </Link>
          </Col>
          <Col md={12} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
