import React, { useState } from "react";
import './askquestion.css'
import {useDispatch , useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { askQuestion } from "../../action/question";

const Askquestion=()=>{
    const [questionTitle,setQuestionTitle]=useState('')
    const [questionBody,setQuestionBody]=useState('')
    const [questionTags,setQuestionTags]=useState('')
    const dispatch =useDispatch()
    const User =useSelector((state) => (state.currentUserReducer))
    const navigate=useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(User.result.silver.length === 1){
            if(User.result.noofquestion.length === 0 || User.result.noofquestion.length <= 5){dispatch(askQuestion({
                    questionTitle,
                    questionBody,
                    questionTags,
                    userPosted:User.result.name,
                    userId:User?.result?._id},
                    navigate
                    ))
                    alert("question is posted sucessfully logout and thn logiin to continue");}
            else{
                alert("you cannot post nore than 5 question a day ")
            }
        }
        if(User.result.gold.length === 1){
            dispatch(askQuestion({
                questionTitle,
                questionBody,
                questionTags,
                userPosted:User.result.name,
                userId:User?.result?._id},
                navigate
            ))
            alert("question is posted sucessfully logout and thn logiin to continue");
        }
        if(User.result.free.length === 0 && User.result.noofquestion.length ===0){dispatch(askQuestion({
            questionTitle,
            questionBody,
            questionTags,
            userPosted:User.result.name,
            userId:User?.result?._id},
            navigate
        ))
        alert("question is posted sucessfully logout and thn logiin to continue");}
        if(User.result.free.length === 0 && User.result.noofquestion.length ===1 && User.result.silver.length === 0 && User.result.gold.length === 0){alert("you are on free membership and can post only one question a day ")}

    }

    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            setQuestionBody(questionBody+"/n")
        }
    }

    return(
        <div className="ask-question" style={{paddingTop:"50px"}}>
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type='text' id='ask-ques-title'  onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder="e.g. Is there an R function for finding the index of an element in a vector?"/>
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyDown={handleEnter}/>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type='text' id='ask-ques-tags'  onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} placeholder="e.g. (xml typescript wordpress)"/>
                        </label>
                    </div>
                    <input type='submit' className='review-btn'  value='Review your Question' />
                </form>
            </div>
        </div>
    )
}

export default Askquestion