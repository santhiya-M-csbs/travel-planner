import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Hotel from './hotels'
import Hotel1 from './bud hotel'
import Hotel2 from './guest hotel'

const Hotelpage = () =>{
    return (
        <div>
            <Nav/>
            <Hotel/>
            <Hotel1/>
            <Hotel2/>
            <Footer/>
        </div>
    )
}

export default Hotelpage