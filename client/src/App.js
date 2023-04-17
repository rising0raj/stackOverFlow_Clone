import './App.css';
import Navbar from './component/navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Allroutes from './Allroutes';
import { useEffect } from 'react';
import { fetchAllQuestions } from './action/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './action/users';

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Allroutes/>
      </Router>
    </div>
  );
}

export default App; 
