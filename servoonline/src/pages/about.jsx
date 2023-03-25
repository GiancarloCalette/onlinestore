import "./about.css";
import { useState } from "react";

function About() {
  const [displayEmail, setDisplayEmail] = useState(false);

  function toggleEmail(){
    console.log("giancarlo.calette@uabc.edu.mx")
    setDisplayEmail(true);
  }

  function getEmailSection(){
    if(displayEmail){
      return <h5>giancarlo.calette@uabc.edu.mx</h5>
    }
    else {
      return null;
    }
    
  }

  return (
    <div className="About">
      <h1>Giancarlo Calette</h1>
      {getEmailSection()}
      <button className="btn btn-sm btn-dark" onClick={toggleEmail}>Show email</button>
    </div>
  );
}

export default About;