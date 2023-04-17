import React from "react";
import Leftsidebar from "../../component/Leftsidebar/Leftsidebar";
import Rigthsidebar from "../../component/Rightsidebar/Rightsidebar";
import QuestionDeatils from "./QusetionDetails";

const DisplayQuestion =()=>{
    return(
        <div className='home-container-1'>
            <Leftsidebar/>
            <div className='home-container-2'>
                <QuestionDeatils/>
                <Rigthsidebar />
            </div>
        </div>
    )
}
export default DisplayQuestion;