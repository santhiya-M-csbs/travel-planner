import './App.css';
import Homepage from './components/homepage.jsx'
import Mytrip from './components/Mytrip/Mytrip'
import Travel from './components/Travel'
import {Route,Routes,Link} from 'react-router-dom';
import Hotelpage from './components/hotelspage';
import Loginpage from './components/loginpage'
import Signuppage from './components/signuppage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */
      <>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="" element={<Homepage/>}></Route>
    <Route path="/home" element={<Homepage/>}></Route>
    <Route path="/mytrip" element={<Mytrip/>}></Route>
    <Route path="/hotels" element={<Hotelpage/>}></Route>
    <Route path="/travelmodes" element={<Travel/>}></Route>
    <Route path="/login" element={<Loginpage/>}></Route>
    <Route path="/signup" element={<Signuppage/>}></Route>
  </Routes>
      
  
      
      {/*
      <Hotel/>
      <Travelmode/> */}
      </>
      }
    </div>

  );
}

export default App;
