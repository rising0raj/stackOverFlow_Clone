import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Upload = () => {

    const [tname,setname]=useState("")
    const [body,setbody]=useState("")
    const [file,setfile]=useState("")


    const sett=(e)=>{
        const{value}=e.target;
        setname(value);
    }

    const setb=(e)=>{
        const{value}=e.target;
        setbody(value);
    }

    const setimg=(e)=>{
        setfile(e.target.files[0])
    }
    return (
    <div style={{padding:"80px"}}>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>About what you want to share</Form.Label>
                <Form.Control type="text" name='topic' placeholder="Topic" onChange={sett} />
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Tell your friend in detail</Form.Label>
                <Form.Control type="text" name='body' onChange={setb}/>
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Upload file</Form.Label>
                <Form.Control type="file" name='file' onChange={setimg}/>
            </Form.Group>
            <Button variant="primary">Share</Button>
        </Form>
    </div>
    )
}

export default Upload
