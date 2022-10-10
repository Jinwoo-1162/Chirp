//import "../CSS/CookieClicker.css";
import cookie from '../chocolate-chip-cookie-16.jpg'
import { useState } from "react";
function CookieClicker(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count=>count+1);
        setCount(count=>count+1);
    }
    const zero = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>{count}</h2>
            <img id ="CookieClicker" src={cookie} alt="cookie" onClick={increment}/>
            <button id="cookieBut" onClick={zero}>Zero</button>
        </div>   
    );
}

export default CookieClicker;