import React from 'react'
import Timer from './Timer';
import CountdownNumber from "react-countdown";
export default function Countdown(props:{dateObjectif:Date}) {
    const renderer = ({ days,hours, minutes, seconds, completed}:any) => {
        if (completed) {
          return <div><p>Achieved</p></div>
        } else {
         
          return (
            <div className="timer">
              <div>
                <Timer value={days} style={{color:"orange"}} unittime="day"/>
                <Timer value={hours} style={{color:"blue"}} unittime="hour"/>
              </div>
            <div>
            <Timer value={minutes} style={{color:"green"}} unittime="minute"/>
            <Timer value={seconds} style={{color:"red"}} unittime="second"/>
            </div>
            
        </div>
          );
        }
      };
      let interval = props.dateObjectif.getTime() - Date.now()
    return (
        <CountdownNumber date={ interval + Date.now()} renderer={renderer}/>
    )
}
