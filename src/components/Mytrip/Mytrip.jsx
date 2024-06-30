import React,{useEffect, useState} from 'react'
// import Mytrip1 from './Mytrip1'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Mytrip.css'
import {BsHCircleFill} from 'react-icons/bs'
import video from '../../images/beach.mp4'
import {GrLocation} from 'react-icons/gr'
import {NavLink} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap'

 const Mytrip = ({ handleSearch }) =>{
  //const [travel, setTravel] = useState(initialTravelState);
  /*const [detail, setDetail] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/endpoint/det").then((resp)=>{
      
    setDetail(resp.data.data); 

   })
  },[]);*/
/*  async function retrieveData(formValue) {
    const client = new MongoClient("http://localhost:8080/endpoint/det");
  
    try {
      // Connect to the MongoDB server
      await client.connect();
  
      // Access the database
      const db = client.db(dbName);
  
      // Access the collection and query the document based on formValue
      const collection = db.collection('yourCollectionName');
      const result = await collection.findOne({ columnName: formValue });
  
      return result;
    } catch (err) {
      console.error(err);   */

  
     const [Destination,setDestination] = useState("")

     const [ travel,setTravel ] = useState([])
      /*useEffect(()=>{
      axios.get(`http://localhost:8080/endpoint/gethot/${Destination}`).then((resp)=>{
          
        setTravel(resp.data.data); 
       })
      },[])
    console.log(travel)*/
   // console.log(typeof docs)

    
    function apiCall(Destination)
    {
      
        axios.get(`http://localhost:8080/endpoint/gethot/${Destination}`,{
        }).then((resp)=>{
            console.log(resp.data)
        },[])

    }
  
   /* const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchValue);
    };*/
  

  
    return (
      <div className="full">
      <nav class="header">
  <div className='logoDiv'>
        <div className="logo">
        <NavLink className="navbar-brand" to="/home"><h1 className="flex"><BsHCircleFill className="icon"/>
            aPPiesT
            </h1></NavLink>
        </div>
    </div>
  <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/mytrip">MyTrip</NavLink></li>
      <li><NavLink to="/hotels">Hotels</NavLink></li>
      <li><NavLink to="/travelmodes">Travel Modes</NavLink></li>
      <li><button className='btn loginBtn'>
        <NavLink to="/login">Login</NavLink>
      </button></li>
      <li><button className='btn'>
        <NavLink to="/signup">Sign Up</NavLink>
      </button></li>
  </ul>
</nav>
<div>
 <div className="back">
<h1 className="hc">Search Your Holiday !</h1>
  <div className="Overlay"></div>
    <video src= {video} autoPlay loop muted className="v"></video>
    <form className='bor' onSubmit={(event) =>
          {event.preventDefault(); apiCall(Destination)}}>
    <table>
    <div className="in">
     <div className="sdbox">
      <tr>
          <td class="s1">
            <div className="Source">
            <label htmlFor="Source" class="l1">Source <GrLocation class="ic"/></label>
    <input list="Source-places" id="Source" class="sou" 
></input>
    <datalist id="Source-places">
        <option>Coimbatore</option>
        <option>Chennai</option>
        <option>Cuddalore</option>
        <option>Trichy</option>
        <option>Salem</option>
        <option>Karur</option>
        <option>Erode</option>
        <option>Dharmapuri</option>
        <option>Thanjavur</option>
        <option>Krishnagiri</option>
        <option>Theni</option>
        <option>Sivagangai</option>
        <option>Villupuram</option>
        <option>Tiruvannamalai</option>
        <option>Tirunelveli</option>
        <option>Tiruppur</option>
        <option>Virudhunagar</option>
    </datalist>
            </div>
          </td>
          <td class="d1">
          <div className="Destination">
            <label htmlFor="Destination" class="l2">Destination <GrLocation class="ic"/></label>
    <input list="Destination-places" id="Destination" class="destin" name="Destination" 
    onChange={(event)=>{setDestination(event.target.value)}} /*required value={travel.To} onChange={handleInputChange}
    name="Destination"*/
></input>
    <datalist id="Destination-places">
        <option>Ooty</option>
        <option>Yercaud</option>
        <option>Kotagiri</option>
        <option>Valparai</option>
        <option>Javadi Hill</option>
        <option>Yelagiri</option>
        <option>Coonoor</option>
        <option>Kolli Hill</option>
        <option>Kodaikanal</option>
        <option>Anaimalai</option>
        <option>Nilgiris</option>
    </datalist>
    </div>
          </td>
          </tr>
          <div className="search">
            <input type="submit"  value="Search" onClick={apiCall} className="search1"></input>
          </div>
    </div> 
    </div>
    </table>
    </form>
    </div>
    </div>


    <div className='doctor-container'>
     <Row>
      {
        travel && travel.map(data => <Col key={data.place==Destination} xs={3}>
          <div>
  <Card  className='doctor-card' style={{ width: '19rem' }} >
    <Card.Img className='doctor-card-img' variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.five_star_hotel}</Card.Title>
      <Card.Subtitle>{data.budget_hotel}</Card.Subtitle>
      <Card.Text>{data.des_five_star}</Card.Text>
     {/* <Card.Text>{Train}</Card.Text>
       <Card.Text>{Train1}</Card.Text>
        <Card.Text>{Train2}</Card.Text>
        <Card.Text>{Cab}</Card.Text>
       <Card.Text>{Cab1}</Card.Text>
        <Card.Text>{Cab2}</Card.Text> */}
    </Card.Body>
    
  </Card>
  </div>
  </Col>
      )}
        

    
    </Row> 
{/* 
 {
 docs && docs.map(data => 
   <div key={data.doc_id}>
    <img src={data.image}/>
    <p>{data.name}</p>
    <p>{data.doc_id}</p>
    <p>{data.year}</p>

   </div>
  )
 }  */}
    
    
    </div> 


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div class="footer">
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
</div>  



</div>
    )
}

export default Mytrip