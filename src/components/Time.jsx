import React, { useState } from "react"; 

function Time(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 500);

    return(
        <div>{time}</div>
    );
}

export default Time;