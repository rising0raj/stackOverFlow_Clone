import React from 'react'
import './sub.css'
import { ChakraProvider,Stack } from '@chakra-ui/react'
import Card from './card'
import logo1 from './silver.jpg'
import logo2 from './gold.jpg'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import logo0 from './free.jpg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Subscription = () => {
  
  const dispatch=useDispatch()
  const navigate=useNavigate('/')
  const User=useSelector((state)=>(state.currentUserReducer))


    const checkOutHandlerfree =()=>{
      // alert(User.result.name+" already is a free member")
      if((User.result.silver.length === 0) && (User.result.gold.length === 0))
  {alert(User.result.name+" already is a free member")}
  else if((User.result.silver.length !== 0) || (User.result.gold.length !== 0))
  {
    alert(User.result.name+" already buy a gold or silver membership")
  }
      dispatch(navigate)
    }
    const checkOutHandlersilver=async(amount,email)=>{
      const {data:{key}}=await axios.get("http://localhost:5000/payment/getkey")
      const {data:{order}} =await axios.post("http://localhost:5000/payment/checkOut",{amount,email})
      const options = {
        key:key, 
        amount: order.amount, 
        currency: "INR",
        name: "STACKOVERFLOW-CLONE", 
        description: "JUST FOR PROJECT",
        image: "logo",
        order_id: order.id, 
        callback_url: "http://localhost:5000/payment/paymentVerify",
        prefill: {
            name: User.result.name,
          email: User.result.email,
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    if((User.result.silver.length === 0) && (User.result.gold.length === 0))
  {var razor = new window.Razorpay(options);
      razor.open();}
  else if((User.result.silver.length !== 0) || (User.result.gold.length !== 0))
  {
    alert(User.result.name+" already buy a gold or silver membership")
  }
  }
  const checkOutHandlergold=async(amount,email)=>{
    const {data:{key}}=await axios.get("http://localhost:5000/payment/getkey")
    const {data:{order}} =await axios.post("http://localhost:5000/payment/checkOut",{amount,email})
    const options = {
      key:key, 
      amount: order.amount, 
      currency: "INR",
      name: "STACKOVERFLOW-CLONE", 
      description: "JUST FOR PROJECT",
      image: "logo",
      order_id: order.id, 
      callback_url: "http://localhost:5000/payment/paymentVerify",
      prefill: {
          name: User.result.name,
        email: User.result.email,
          contact: "9000090000"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  if((User.result.silver.length === 0) && (User.result.gold.length === 0))
  {var razor = new window.Razorpay(options);
      razor.open();}
  else if((User.result.silver.length !== 0) || (User.result.gold.length !== 0))
  {
    alert(User.result.name+" already buy a gold or silver membership")
  }
}
    return (
    <div className="sub-container-1">
      <div className="sub-container-2">
        <h1 className='detail'>A free user can only ask one question a day </h1>
        <h1 className="detail">A silver membership user can ask 5 question a day </h1>
        <h1 className="detail">A gold membership can ask ultimated question a day</h1>
        <ChakraProvider>
          <Stack alignItems="center" justifyContent="center"padding="20px" direction={"column"}>
            <Card amount={0} img={logo0} checkOutHandler={checkOutHandlerfree} />
            <Card amount={100} img={logo1} checkOutHandler={checkOutHandlersilver} />
            <Card amount={1000} img={logo2} checkOutHandler={checkOutHandlergold} />
          </Stack>
        </ChakraProvider>
        <NavLink to="/" className="detail">
        <input className='review-btn'  value='HOME' />
                    </NavLink>
      </div>
    </div>
    )
}

export default Subscription
