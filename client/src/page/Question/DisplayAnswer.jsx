import React from "react";
import Avatar from "../../component/Avatar/Avatar";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {deleteAnswer} from'../../action/question'

const DisplayAnswer = ({ question,handleShare }) => {
    const User=useSelector((state)=>(state.currentUserReducer))
    const {_id}=useParams()
    const dispatch=useDispatch()

    const handleDelete=(answerId,noOfAnswers)=>{
        dispatch(deleteAnswer(_id,answerId,noOfAnswers-1))
    }

    return (
        <div>
            {question.answer.map((ans) => (
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <button type="button" onClick={handleShare}>Share</button>
                        {
                            User?.result?._id === ans?.userId &&(
                            <button type='button' onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>Delete</button>)
                            
                        }
                    </div> 
                    <div>
                        <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link
                            to={`/Users/${ans.userId}`}
                            className="user-link"
                            style={{ color: "#086d8" }}
                        >
                            <Avatar
                                backgroundColor="green"
                                px="8px"
                                py="5px"
                                borderRadius="4px">
                                {ans.userAnswered.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{ans.userAnswered}</div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayAnswer;
