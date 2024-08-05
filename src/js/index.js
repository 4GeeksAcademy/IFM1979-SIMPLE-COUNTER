import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/style.css";
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0;

setInterval(() => {

    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter);
    
    counter++;

    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter one={one} two={two} three={three} four={four} five={five} six={six}/>);
},1000)

