import React from "react";
import './Footer.css';
import {BsHCircleFill} from 'react-icons/bs'

const Footer = () =>{
    return (
        <div className="footer">
        <div className='logoDiv'>
        <div className="logo">
            <h1 className="flex"><BsHCircleFill className="icon"/>
            aPPiesT
            </h1>
        </div>
        </div>
        <p className="fot">Travel Forever</p>
    <div className="contact"> 
        <h2>Contact Us</h2>
        <div class="no">
        <>
        <p><strong>Email : </strong>Happiest@gmail.com</p>
        <p><strong>Phone : </strong>9876543210</p>
        </>
        </div>
    </div>
    <div className="follow"> 
        <h2>Follow Us On</h2>
        <div className="no">
        <p>Happiest4ever@github.com</p>
        <p>Happiest4ever@instagram</p>
        </div>
    </div>
    <div className="help"> 
        <h2>Help</h2>
        <div className="no">
        <p>Support</p>
        <p>Troubleshooting</p>
        </div>
    </div>
</div>

    )
}

export default Footer;