import cookieimage from './Cookie.jpeg'
import buttonimage from './button.jpeg'
import "./Cookie.css"
import { useState } from "react";

function CookieClicker(props) {
    const [count, setCount] = useState(props.defCount);
    function increment() {
        setCount((count) => count + 1);
    }

    function zero() {
        setCount(0);
    }
   
    return (
        <div>
            <h2>{count}</h2>
        
        <img id="cookie" src={cookieimage} alt="logo" onClick={increment}/>
        <img id="button" src={buttonimage} onClick={zero}/>
        </div>
    );
}
export default CookieClicker;