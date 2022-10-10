import logo from './logo.svg';
import './CSS/App.css';
import Textbox from './Textbox'
import CookieClicker from './Views/CookieClicker';
import Contact from './Views/Contact';
import Home from './Views/Home';
import Error from './Views/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}></Route>
      <Route path ="/contact" element={<Contact/>}></Route>
      <Route path ="/*" element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
