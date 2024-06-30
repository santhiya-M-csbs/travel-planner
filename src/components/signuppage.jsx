import React, {useState} from "react";
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import SignupForm from './signup/signup'

const Signuppage = () =>{
    return (
        <div>
            <Nav/>
            <SignupForm/>
        </div>
    )
}
export default Signuppage;