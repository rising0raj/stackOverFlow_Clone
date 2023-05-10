import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";
import Question from "./page/Question/question";
import Askquestion from "./page/askquestion/askquestion";
import DisplayQuestion from "./page/Question/DisplayQuestion";
import Tags from "./page/tags/tags"
import User from "./page/user/user";
import UserProfile from "./page/UserProfile/UserProfile";
import Community from "./page/community/community";
import Subscription from "./page/subscription/subscription";
import OptVerification from "./page/optverfiction/OptVerification"
import Paymentsuccess from "./page/subscription/paymentsuccess";
// import Upload from "./page/community/Upload";

const Allroutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Auth" element={<Auth/>}/>
            <Route path="/Questions" element={<Question/>}/>
            <Route path="/askquestion" element={<Askquestion/>}/>
            <Route path="/Questions/:_id" element={<DisplayQuestion/>}/>
            <Route path="/Tags" element={<Tags/>}/>
            <Route path="/Users" element={<User/>}/>
            <Route path="/Users/:id" element={<UserProfile/>}/>
            <Route path="/Community" element={<Community/>}/>
            <Route path="/Subscription" element={<Subscription/>}/>
            <Route path="/optverification" element={<OptVerification/>}/>
            <Route path="/paymentsuccess" element={<Paymentsuccess/>}/>
            {/* <Route path="/upload" element={<Upload/>}/> */}
        </Routes>
    )
}

export default Allroutes 