import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './opt.css'
import { useDispatch } from 'react-redux';

const OptVerification = () => {

    const navigate=useNavigate()
    // const dispatch =useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const [opt,setopt]=useState()
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(User.result.opt === opt)
        navigate('/askquestion')
        else{
            alert("Enter OPT is wrong Try Again...");
            navigate('/optverification')
        }
    }
    
    return (
    <div>
        <div className="optverifi">
            <div className="optverifi_conatainer">
                <h1>Authenticate with OTP before asking questions</h1>
                <form onSubmit={handleSubmit}>
                    <div className="optform_container">
                        <label htmlFor='opt'>
                            <h4>Entry OPT </h4>
                            <p>An OPT has been mail to {User.result.email}</p>
                            <input type="text"  id='opt'placeholder='0000' onChange={(e)=>{setopt(e.target.value)}}/>
                        </label>
                    </div>                    
                    <div ><input type='submit' className='opt-btn'  value='Verify OPT' /></div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default OptVerification
