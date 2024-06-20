
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import APItest from './APItest';
import { Provider } from 'react-redux';
import CakeContainer from './CakeContainer';
// import Counter from './features/Counting/Counter';
// import store from './app/store';


function App() {
  return (
    <div>

{/* 
      <Header />
      <Content />
      <APItest />

      <Footer/> */}
      <CakeContainer />
    </div>
  );
}

export default App;
