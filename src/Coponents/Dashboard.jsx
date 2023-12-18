import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category,setCategory] = useState('')
  const [categoryData,setCategoryData] = useState([])
  const [loading,setLoading] = useState(false)

  const addCategory = async(e)=>{
    e.preventDefault()
    try {
      if(!category){
        alert("Enter the category")
      }
      else{
        await axios.post('http://localhost:8000/category',{category})
        handleClose()
        alert("Category Added sucessfuly")
        setLoading(true)
        
      }
    } catch (error) {
      alert("Alredy Added")
    }
  }

const getCategory = async(e)=>{
  const {data} = await axios.get('http://localhost:8000/getcategory')
  setCategoryData(data)
  
}

useEffect(()=>{
  getCategory()
  setLoading()
},[])
console.log(categoryData);
  return (
    <div>
      <Container className="text-black card mt-5">
        <h1 className="text-center my-5">Cars</h1>
        <Row>
          <div className="d-flex p-3">
            <div>
              <h2 className="text-center">Categories</h2>
            </div>
            <div className="ms-3">
              <MDBBtn  onClick={handleShow}>
                <i class="fa-solid fa-plus"></i>Add Category
              </MDBBtn>
            </div>
          </div>
          {
            categoryData.map((item)=>(
             
              <Col className="card bg-primary  " lg={4}>
              <h1 className="text-center">{item.category}</h1>
              <MDBBtn className="btn btn-secondary mb-3">Add subCategory</MDBBtn>

              </Col>
              
            ))
          }
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the Category Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MDBInput
            className="mb-4"
            type="text"
            label="Enter the category"
            onChange={(e)=>setCategory(e.target.value)}
            />

            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
