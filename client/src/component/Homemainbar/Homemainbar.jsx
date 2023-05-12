import React from "react";
import { useLocation} from "react-router-dom";
import QuestionList from "./QuestionList";
import "./HomeMainbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homemainbar = () => {
    const location = useLocation(); 
    const user=useSelector((state) => state.currentUserReducer);
    const navigate=useNavigate();
    const questionsList=useSelector(state=>state.questionsReducer)
    // console.log(user.result.opt)
    // var questionsList = [
    //     {
    //         _id: 1,
    //         upVotes: 2,
    //         downVotes: 2,
    //         noOfAnswers: 2,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //         userPosted: "mano",
    //         userId: 1,
    //         askedOn: "jan 1",
    //         answer: [
    //             {
    //                 answerBody: "Answer",
    //                 userAnswered: "kumar",
    //                 answeredOn: "jan 2",
    //                 userId: 2,
    //             },
    //         ],
    //     },
    //     {
    //         _id: 2,
    //         upVotes: 7,
    //         downVotes: 2,
    //         noOfAnswers: 0,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["javascript", "R", "python"],
    //         userPosted: "mano",
    //         askedOn: "jan 1",
    //         userId: 1,
    //         answer: [
    //             {
    //                 answerBody: "Answer",
    //                 userAnswered: "kumar",
    //                 answeredOn: "jan 2",
    //                 userId: 2,
    //             },
    //         ],
    //     },
    //     {
    //         _id: 3,
    //         upVotes: 3,
    //         downVotes: 2,
    //         noOfAnswers: 0,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["javascript", "R", "python"],
    //         userPosted: "mano",
    //         askedOn: "jan 1",
    //         userId: 1,
    //         answer: [
    //             {
    //                 answerBody: "Answer",
    //                 userAnswered: "kumar",
    //                 answeredOn: "jan 2",
    //                 userId: 2,
    //             },
    //         ],
    //     },
    // ];

    const checkAuth=()=>{
        if(user===null){
            alert("Log In OR Sign Up to continue...");
            navigate('/Auth');
        }
        else{
            navigate('/optverification')
        }
    }

    return (
        <div className="main-bar" >
            <div className="main-bar-header">
                { location.pathname==='/'?<h1>TOP QUESTION</h1>:<h1>ALL QUESTION</h1>}
                <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div >
                { questionsList.data===null? <h1>Loading...</h1> :<>
                    <p>
                    {questionsList.data.length} Question
                    </p>
                    <QuestionList questionList={questionsList.data}/>
                </>}
            </div>
        </div>
    );
};

export default Homemainbar;
