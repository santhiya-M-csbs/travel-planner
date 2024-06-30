import React, {useState} from "react";
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Homepage = () =>{
    return (
        <div>
            <Nav/>
            <Navbar/>
            <Footer/>
        </div>
    )
}
export default Homepage;