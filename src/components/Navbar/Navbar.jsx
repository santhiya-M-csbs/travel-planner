import React from 'react'
import './Navbar.css'
import {BsHCircleFill} from 'react-icons/bs'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'

import img from '../../images/hillpop1.jpg'
import img2 from '../../images/hillpop5.jpg'
import img3 from '../../images/hillpop3.jpg'
import img4 from '../../images/hillpop4.jpg'
import va1 from '../../images/v1.jpg'
import va2 from '../../images/v2.jpg'
import va3 from '../../images/v6.jpg'
import va4 from '../../images/v5.jpg'

const Navbar = () =>{
    return(

<div id="c1">
<div class="container">
{/*<nav class="header">
    <div className='logoDiv'>
        <div className="logo">
            <h1 className="flex"><BsHCircleFill className="icon"/>
            aPPiesT
            </h1>
        </div>
    </div>
  <ul>
      <li><a href="#">Home</a></li>
      <li><a href="MyTrip.jsx">MyTrip</a></li>
      <li><a href="#">Hotels</a></li>
      <li><a href="#">Travel Modes</a></li>
      <li><button className='btn loginBtn'>
        <a href="#">Login</a>
      </button></li>
      <li><button className='btn'>
        <a href="#">Sign Up</a>
      </button></li>
  </ul>
    </nav>*/}
<div class="hp">
<h1 class="title">Plan your trip with HaPPiesT </h1>
<p className="subTitle">
Travel Forever
</p>
<div class="but">
<button className='e'>
    <a href="#" className="e1">Explore More</a>
</button>
<button className='o'>
    <a href="#" className="o1">Our trips</a>
</button>
</div>
    </div>

<div className="medium">
    <div className="t">
        <h2 className="sectitle">
        Popular Destinations
        </h2>
        <p className="det">
        Come and see the best of the world !
        </p>
        <div className="arrow">
        <BsArrowLeftCircleFill className="icon1"/>
        <BsArrowRightCircleFill className="icon1"/>
        </div>
        <table>
            <tr>
        <div className="maincon">
            <td>
            <div className="bo">
            <div className="desimg">
                <img src={img} alt="image title" class="img1"/>
            </div>
            <h3 class="plac">Ooty</h3>
            <h6 class="desp"> Popular hill station located in the Nilgiri Hills and popularly called as the "Queen of Hill Stations"</h6>
            </div>
            </td>
            <td>
            <div className="bo">
            <div className="desimg">
                <img src={img2} alt="image title" class="img1"/>
            </div>
            <h3 class="plac">Yercaud</h3>
            <h6 class="desp">Picturesque hill station on the Eastern Ghats, trekking here can be one of the most pleasurable experiences</h6>
            </div>
            </td>
            <td>
            <div className="bo">
            <div className="desimg">
                <img src={img3} alt="image title" class="img1"/>
            </div>
            <h3 class="plac">Kodaikanal</h3>
            <h6 class="desp">Often referred as "Princess of Hill stations", Kodaikanal is one of the most popular tourist destinations</h6>
            </div>
            </td>
            <td>
            <div className="bo">
            <div className="desimg">
                <img src={img4} alt="image title" class="img1"/>
            </div>
            <h3 class="plac">Coonoor</h3>
            <h6 class="desp">Second largest town and first of the three Nilgiri hill stations, also known as the "Jewel of the Nilgiris"</h6>
            </div>
            </td>
        </div>
        </tr>
        </table>

        <div class="recent">
            <h2 className="sectitle">Our Recent Trips</h2>
            <p className="det">Life is either a daring adventure, or nothing at all !</p>

            <div className="r1">
                <div className="text-des">
                     <h2>
                     Valparai - The Seventh Heaven
                     </h2>
                     <p>
                     Valparai is a hill station in Tamil Nadu that lies close to the border of Kerala. It consists of the Anamalai
                      Tiger Reserve and lies perfectly between Munnar and Nelliyampathy Forest Reserve in Palakkad, another underrated 
                      tourist destination in Kerala. The Aliyar Dam is a reservoir at the foothills of Valparai that surrounds itself 
                      with tall mountains across all sides.
                     </p>
                </div>
                <div class="sideimg">
                <img src={va1} class="valimg1"/>
                <img src={va2} class="valimg2"/>
                </div>
            </div>
            <div className="r2">
            <div class="sideimg">
                <img src={va3} class="valimg3"/>
                <img src={va4} class="valimg4"/>
                </div>
                <div className="text-des">
                     <h2>
                     Nilgiris - Blue Mountains
                     </h2>
                     <p>
                     The Nilgiris is also known as Blue Mountains because of the blue smoke haze caused by the kurunji flowers
                      which bloom every 12 years giving the hills a bluish hue. The hills are covered with eucalyptus, pine trees 
                      and tea and coffee plantations. These hills are the range of mountains in Southern India spread over the states of
                     Tamil Nadu, Karnataka and Kerala. There are many places to visit among these mountains.
                     </p>
                </div>
            </div>
        </div>
    </div>
</div>

{/*<div class="footer">
        <div className='logoDiv'>
        <div className="logo">
            <h1 className="flex"><BsHCircleFill className="icon"/>
            aPPiesT
            </h1>
        </div>
        </div>
        <p class="fot">Travel Forever</p>
    <div class="contact"> 
        <h2>Contact Us</h2>
        <div class="no">
        <>
        <p><strong>Email : </strong>Happiest@gmail.com</p>
        <p><strong>Phone : </strong>9876543210</p>
        </>
        </div>
    </div>
    <div class="follow"> 
        <h2>Follow Us On</h2>
        <div class="no">
        <p>Happiest4ever@github.com</p>
        <p>Happiest4ever@instagram</p>
        </div>
    </div>
    <div class="help"> 
        <h2>Help</h2>
        <div class="no">
        <p>Support</p>
        <p>Troubleshooting</p>
        </div>
    </div>
</div>*/}

</div>
</div>
    )
}

export default Navbar