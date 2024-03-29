import React, { useState } from "react"
import './FloatingWindow1.css';
import axios from 'axios';
import { ReactComponent as Icon } from '../../static/icon.svg';
import { useNavigate } from "react-router-dom";



const FloatingWindow1 = ({setLoginUser}) => {
  const navigate = useNavigate();
  const [ user, setUser] = useState({
    email:"",
    password: ""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}  
  
const login = () =>{
  const{email ,password } = user
  

  

  if( email && password){
    
    axios.post('http://localhost:9000/login', user)
    .then((res)=> {
      alert(res.data.message)
      setLoginUser(res.data.user)
      const abc = res.data.user
      localStorage.setItem('name', abc.name);
      localStorage.setItem('role', abc.role);
      navigate("/dashboard")
    })
    .catch((err)=>{});
  }
  else{
    alert("Invalid inputs");
  }

}  
  
  return (

    <div className="floating-window1">
      <div className='content'>
        <h1 className='header'>Login</h1>

        <div className='boxers'>
        <input className="boxes1" type="text" name="email"  placeholder="email" value={user.email} onChange={ handleChange } ></input>
        </div>

        <div className='boxers2'>
        <input className="boxes1" type="password" name="password"  placeholder="Password" value={user.password} onChange={ handleChange } ></input>
        </div>
        
        
        
        <div className='boxers8'>
          <button className='boxers5' onClick={login}>Login</button>
        </div>

        <div className='boxers9'>
          <p><b>Or Login With</b></p>
        </div>

        <div className='boxers11'>
          <p onClick={()=> navigate("/")} >Not Registered Yet?</p>
        </div>

        <div className='boxers10'>
          <Icon style={{ width: '32px', height: '32px' }} />
        </div>

      </div>  
  
    </div>
  );
}
export default FloatingWindow1;
