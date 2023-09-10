import React, { useState, useEffect } from "react";
import icon from "./icon-dice.svg";
import DesktopDivider from './pattern-divider-desktop.svg';
import MobileDivider from './pattern-divider-mobile.svg';


function Advice() {
  const [advice, setAdvice] = useState('');
  const [number, setNumber] = useState('');

  const url = "https://api.adviceslip.com/advice?t=" + Math.random();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.slip.advice);
      setAdvice(json.slip.advice);
      setNumber(json.slip.id);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (<>
    <div className='advice-number'>ADVICE #{number}</div>
    <div className="advice-text">"{advice}"</div>
    <img className='divider-mobile' src={MobileDivider} />
    <img className='divider-desktop' src={DesktopDivider} />
    <button className="reroll-button" onClick={fetchData} ><img className="button-icon" src={icon} /></button >
  </>

  );
}
export default Advice;
