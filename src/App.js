// import './App.css';
// import Navbar from './components/Navbar';
// import Textbox from './components/Textbox';

// function App() {
 
//   return (
//     <>
      
//     <Navbar title= "KL University" aboutText="Aboutus"/>
//    <div className="container">
   
//    <Textbox heading="Enter text here to analyze:"/> 
//    </div>
//    <div className ="container my-4" >
   

//     <button className = "btn btn-primary"  >Convert to Uppercase</button>
//    </div>
   
//     </>
//   );
// }
// export default App;

// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar title="KL University" aboutText="Aboutus" />
    <Routes>
      <Route path="/" element={<Textbox heading="Enter text here to analyze:" />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </>
  );
}

export default App;