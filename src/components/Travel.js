import React from 'react'
import '../App.js'
import Hero from './Hero.js'
import Gallery from './gallery.js'
import Slide from './sliding images';
import  Nav from './Nav/Nav.jsx'
import Footer from './Footer/Footer.jsx'

function Travel()
{
    return(
       <div>
        <Nav/>
         <Hero/>
         <Slide/>
         <Gallery/>
         <Footer/>
       </div>
    );
}
export default Travel;