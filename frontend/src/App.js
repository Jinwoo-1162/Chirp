import logo from './logo.svg';
import './App.css';
import Textbox from './Textbox.js';
import CookieClicker from './CookieClicker';
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Error from "./Views/Error";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useEffect } from React;
import axios from axios;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/contact" element={ <Contact/> }></Route>
      <Route path="/*" element={ <Error/> }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
