// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Content from'./Content';
import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About';
import Navbar from './Navbar';
import Page1 from './pages/page1';

import Home from './pages/Home';


  

function App() {
   //you can create variables that dont get rturned
  const name = "John Doe";
  console.log(window.location)
  return (
    <div className="App">
      
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/page1" element={<Page1 />}/>
          
        </Routes>
      </div>
     <Header />
     {/* <Content /> */}
    
    <Form />
    <About />
     <Footer />

        {/* you can  make stuff to strings immediatly by encolising them in an {} */}
        {/* Java script expresions use {}*/}
      
     
    </div>
  );
}

export default App;
