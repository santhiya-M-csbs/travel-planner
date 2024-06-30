import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import axios from "axios";
import "./login.css";
import is from '../../images/bg1.jpeg'


export default function Login() {

  const [ user, setUser] = useState({
    email:"",
    password:""
});

const handleChange = e => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]:value
    })
}
const check = () => {
  const { email, password } = user
      axios.get("http://localhost:8080/register/register", user)

      .then( res => console.log(res));
//       if(res=="Success")
// {
//   alert('Login Successsful');

// }
// else{
//   alert('user does not exist');
// }
}
   return (

    

     <div>
        <img className="bgimg" src={is} height={720}
    width={1470}></img>
        
       <Form className="login">
                  
                <h1 className="headerTitle" >Login</h1>
          
        <div className="em">

           <Form.Label className="email">Email<br></br></Form.Label>

           <Form.Control

             autoFocus

             type="email"
             
             value={user.email}
             onChange={handleChange}
          

           />


         </div>

        <div className="em"><br></br>
  

           <Form.Label className="email">Password<br></br></Form.Label>

           <Form.Control

             type="password"
             
             value={user.password}
             onChange={handleChange}

           />

         </div>
          <br></br>
          <div className="li">
         <Button className="loginb"  type="submit" onClick={check}>
         <NavLink to="/home">
               Login
          </NavLink>
         </Button>
         </div>

         <p className="text">Or login using</p>

         <div className="alternate-login">
          <div className="facebook"></div>
          <div className="google"></div>
          <div className="twitter"></div>
         </div>
          
          <div className="signUp5">
         <p className="text">Don't have account? <NavLink to="/signup">Signup</NavLink></p>
         
         </div>
       </Form>

      
      

</div>
     
   );

   }
