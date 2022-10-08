import logo from './logo.svg';
import './App.css';
import Home from './Views/Home.js';
// import Contact from './Views/Contact.js';
// import Error from './Views/Error.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
