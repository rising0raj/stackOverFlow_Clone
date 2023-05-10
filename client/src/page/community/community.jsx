import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
// import lo from '/i.png'
import lo from "./download.jpg"

const Community = () => {

    const navigate=useNavigate()
    const User=useSelector((state)=>(state.currentUserReducer))
    const handleupload =(e)=>{
        e.preventDefault()
        navigate("/upload")

    }
    return (
    <>
        <div className='container mt-2' style={{paddingTop:"40px"}}>
            <h1 className='text-center mt-2' style={{textAlign:"center"}}>Post text or Upload Image</h1>
            <div className='text-end'style={{float:"right",paddingRight:"25px"}}>
            <Button variant="primary" onClick={handleupload}>Post something</Button>
            </div>
            <div className='text-end'style={{float:"left",paddingRight:"25px"}}>
            <Button variant="primary" onClick={handleupload}>Go home</Button>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"40px"}}>
            <Card style={{ width: '22rem',marginBottom:"3rem" }}>
                <Card.Img variant="top" src={lo} style={{padding:"5px"}}/>
                <Card.Body style={{textAlign:"center"}}>
                    <Card.Title>prince rak</Card.Title>
                    <Card.Text>posted on a min ago</Card.Text>
                <Button variant="danger" className='col-lg-6 text-center'>delete</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </>
    )
}

export default Community
