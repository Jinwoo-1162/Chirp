import { useState } from "react";
import axios from 'axios';

function App(props) {
  const [quote, setQuote] = useState("");
  async function wait() {
    const randQuote = await axios.get("https://api.quotable.io/random");
    setQuote(randQuote.data.content);
  }
  wait();
  return (
    <div>{quote}</div>
  )
}
export default App;
