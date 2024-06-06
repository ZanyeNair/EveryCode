// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Content from'./Content';
import Footer from './Footer';
import React from 'react';
import InterviewForm from './pages/InterviewForm';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Navbar from './Navbar';

import Home from './pages/Home';
import SignUp from './pages/SignUp';



  

function App() {
   //you can create variables that dont get rturned
  const name = "John Doe";

  return (
    <div className="App">
      
      <Navbar class ="nav"/>
      <div className = "container">
        <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/interviewForm" element={<InterviewForm />}/>
            <Route path = "/about" element={<About />}/>
            <Route path = "/signup" element={<SignUp />}/>
          
        </Routes>
      </div>
     <Header />
     {/* <Content /> */}
    

    {/* <About /> */}
     <Footer />

        {/* you can  make stuff to strings immediatly by encolising them in an {} */}
        {/* Java script expresions use {}*/}
      
     
    </div>
  );
}

export default App;
