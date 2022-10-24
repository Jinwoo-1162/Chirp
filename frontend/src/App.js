import logo from './logo.svg';
import './App.css';
import Home from './Views/Home.js';
import Contact from "./Views/Contact.js";
import QuoteGenerator from "./Views/QuoteGenerator.js";
import Inbox from "./Views/Inbox.js";
// import Contact from './Views/Contact.js';
// import Error from './Views/Error.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Messages1 from './Views/Messages1.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        {<Route path="/Messages" element = {<Messages1/>}></Route>}
        {<Route path="/Contact" element={<Contact />} />}
=======
        <Route path="/Contact" element={<Contact />} />
        <Route path="/QuoteGenerator" element={<QuoteGenerator />} />
        <Route path="/Inbox" element={<Inbox />} />
>>>>>>> Stashed changes
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
