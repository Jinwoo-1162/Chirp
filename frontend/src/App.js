import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Textbox from './Textbox.js';
import CookieClicker from './CookieClicker';
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Error from "./Views/Error";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useEffect } from React;
import axios from axios;
=======
import Home from './Views/Home.js';
import Contact from "./Views/Contact.js";
// import Contact from './Views/Contact.js';
// import Error from './Views/Error.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Messages1 from './Views/Messages1.js';

>>>>>>> 34827b4a381c0a61b98dd9aa4e4f3fc76bfed705

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/contact" element={ <Contact/> }></Route>
      <Route path="/*" element={ <Error/> }></Route>
    </Routes>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/Messages" element = {<Messages1/>}></Route>}
        {<Route path="/Contact" element={<Contact />} />}
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
>>>>>>> 34827b4a381c0a61b98dd9aa4e4f3fc76bfed705
    </BrowserRouter>
  );
}

export default App;
