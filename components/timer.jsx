import react, { useEffect, useState } from "react";

export default function Timer(){


    const [seconds,setSeconds] = useState(30)
    const [minutes, setMinutes] = useState(0)

    const [timerOn, setTimerOn] = useState(false)

    




    useEffect(()=> {
       const timer = setInterval(() => {
        if (timerOn) {
            if(minutes === 0 && seconds === 0) {
            alert("time up")
            } else if (seconds === 0) {
            setMinutes(minutes -1);
            setSeconds(59);
            } else { 
            setSeconds(seconds -1)
        }} else { clearInterval(timer)}

        },1000)
        return () => clearInterval(timer)
      
        }

    , [minutes, seconds, timerOn]);
 


return (
    <>
    <div>
       <span>{minutes<10? "0"+minutes: minutes}</span>
       <span>:</span>
       <span>{seconds<10? "0"+seconds: seconds}</span>
<nav>
       <button type='button' onClick={() => setTimerOn(true)} >START</button>
       
       <button type='button' onClick={() => setTimerOn(true)}>RESUME</button>

       <button type='button' onClick={() => setTimerOn(false)} >STOP</button>
       <button type='button' onClick={() => {setMinutes(1); setSeconds(10)}} >RESET</button>
       </nav>
    </div>
  
    </>
)

}