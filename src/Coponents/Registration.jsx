import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


function Registration() {

    const [name,setName] = useState('')
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    console.log(name,userName,password,email,phoneNumber);
    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault()
       try {
        if(!name||!email||!password||!phoneNumber||!userName){
            alert("Enter all the details")
        }
        else{
            if(phoneNumber.length==10){
                await axios.post('http://localhost:8000/register',{name,userName,password,email,phoneNumber})
                alert("Register Succeful")
                navigate('/login')
            }
           else{
            alert("Phone Number must be 10 digits")
           }
        }

       } catch (error) {
        alert("user Already registed")
       }
    }


  return (
    <>
      <Container>
        <Row className="p-5">
          <Col md={12} lg={4}></Col>
          <Col md={12} lg={4} className="card p-4 text-black">
            <h1 className="text-center mb-4">Regsitration</h1>
            <div>
              <MDBInput
                className="mb-4"
                type="text"
                label="Enter the Name"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div>
              <MDBInput
                className="mb-4"
                type="email"
                id="form1Example1"
                label="Enter the UserName"
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div>
              <MDBInput
                className="mb-4"
                type="email"
                label="Email address"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div>
              <MDBInput
                className="m"
                type="password"
                id="form1Example1"
                label="Enter the password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <p className="mb-3 text-danger">password must conatin specialsymbols,numbers</p>
            </div>

            <div>
              <MDBInput
                className="mb-4"
                type="number"
                id="form1Example1"
                label="Enter the phonenumber" 
                maxLength = "10"
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
                <MDBBtn className="form-control" onClick={handleSubmit}>
                    Register
                </MDBBtn>
            </div>
            <div className="my-4">
                <h4>Already Registered?</h4>
            </div>
            
                    <Link to={"/login"}>
                    <MDBBtn className="form-control btn btn-dark">
                    Login
                    </MDBBtn>
                    </Link>
                
          </Col>
          <Col md={12} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Registration;
