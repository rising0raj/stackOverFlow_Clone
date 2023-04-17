import React ,{useEffect}from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import Avatar from '../../component/Avatar/Avatar'
import './navbar.css';
import { useSelector,useDispatch } from "react-redux";
import { setCurrentUser } from "../../action/currentUser";
import { useNavigate } from "react-router-dom";
import decode from 'jwt-decode'


const Navbar=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()
    var User=useSelector((state)=>(state.currentUserReducer))

    useEffect(()=>{
        const token=User?.token
        if(token){
            const decodeToken=decode(token)
            if(decodeToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    return(
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo'/>
                </Link>
                <Link to='./' className='nav-item nav-btn'>About</Link>
                <Link to='./' className='nav-item nav-btn'>Product</Link>
                <Link to='./' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='Search...'/>
                    <img src={search} alt='search' className='search-icon' />
                </form>
                {User === null ? <Link to='/Auth' className='nav-item nav-btn nav-link'>LOG IN</Link>:
                <>
                <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                {console.log(User?.result?._id)}
                <button className='nav-item nav-link' onClick={handleLogout}>LOG OUT</button>
                </>}
            </div>
        </nav>
    )
}

export default Navbar