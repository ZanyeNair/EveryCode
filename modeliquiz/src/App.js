
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import APItest from './APItest';
import store from '/.store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter';


function App() {
  return (
    <div>


      <Header />
      <Content />
      <APItest />

      <Footer/>
    </div>
  );
}

export default App;
