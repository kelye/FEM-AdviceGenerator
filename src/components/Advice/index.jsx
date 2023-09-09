import React, { useState, useEffect } from "react";
import Button from "../Button";
import icon from "./icon-dice.svg"

function Advice() {
  const [advice, setAdvice] = useState('');

  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.slip.advice);
      setAdvice(json.slip.advice);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (<>
    <div className="advice-text">{advice}</div>
    <button className="reroll-button" onClick={fetchData} ><img className="button-icon" src={icon} /></button >
  </>

  );
}
export default Advice;
