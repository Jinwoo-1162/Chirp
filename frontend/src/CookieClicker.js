import cookie from "./cookie.png.png";
import "./CookieClicker.css";
import {useState} from "react";

function CookieClicker(props) {
    const [count, setCount] = useState(0);
    
    const increment = () => { //works the same as function increment() {}
        setCount((count) => count + 1);
        setCount((count) => count + 1); // we need this otherwise it is asynchronous
    }
    
    return (
        <div>
            <h2>{count}</h2>
            <img id="cookie" src={cookie} alt="cookie" onClick={increment}/>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default CookieClicker;