import React from "react";
import Homemainbar from "../../component/Homemainbar/Homemainbar.jsx";
import Leftsidebar from "../../component/Leftsidebar/Leftsidebar";
import Rigthsidebar from "../../component/Rightsidebar/Rightsidebar";
import "../../App.css";

const Question=()=>{
    return(
        <div className='home-container-1' style={{paddingTop:"50px"}}>
            <Leftsidebar/>
            <div className='home-container-2'>
                <Homemainbar/>
                <Rigthsidebar/>
            </div>
        </div>
    )
}

export default Question