import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import {NavLink} from "react-router-dom";
import './signup.css'
export default function SignupForm(){
  const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      confirmpass: ""
  });

  const handleChange = e => {
      const { name, value } = e.target;
      setUser({
          ...user,
          [name]:value
      })
  }

  const register = () => {
      const { name, email, password, confirmpass } = user
      if( name && email && password && (password === confirmpass)){
          axios.post("http://localhost:8080/register/register", user)
          .then( res => console.log(res));
      } else {
          alert("password does not match confirm password")
      }
  }



  return (
   
    <div className='signup6_container2'>
       {console.log("User",user)}
       <div className='signup_form'>
        <h3 className='title3'>SignUp</h3>
        <div className='form3'>
           <form className='bor'>
            <label forhtml="name" className="name3"><strong>Name:</strong></label><br/>
            <input type="txt" placeholder="Enter Name" value={user.name} name="name"
            onChange={handleChange} className='control'/><br/><br/><br/>

            <label forhtml="email" className="email3"><strong>Email:</strong></label><br/>
            <input type="email" placeholder="Enter Email" value={user.email} name="email"
            onChange={handleChange} className='control'/><br/><br/><br/>

            <label forhtml="password" className="password3"><strong>Password:</strong></label><br/>
            <input type="password" placeholder="Enter Password" value={user.password} name="password"
            onChange={handleChange} className='control'/><br/><br/><br/>

            <label forhtml="confirm_password" className='confirm_password3'><strong>Confirm Password:</strong></label>
            <input type="password" placeholder="Enter Confirm Password" value={user.confirmpass} name="confirmpass"
            onChange={handleChange} className='control'/><br/><br/><br/>

            <div className='mt-3'>
              <button className="can" onClick={register}>Register</button>
              <button className="sig6"><NavLink to="/login"  className="s7">Login</NavLink></button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}







