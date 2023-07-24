import React, { useEffect, useState } from "react";

function CountDown(props) {
  const [days, setdays] = useState();
  const [hours, sethours] = useState();

  const [mins, setmins] = useState();
  const [secs, setsecs] = useState();

  const getTime = () => {
    const deadLine = props.deadLine;

    const time = Date.parse(deadLine) - Date.now();
    setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
    sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setmins(Math.floor((time / 1000 / 60) % 60));
    setsecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mt-4 flex space-x-4 text-sm font-poppins tracking-widest">
      <div className=" text-center space-y-1 lg:space-y-2 flex items-center">
        <h1 className="text-red-500 font-bold text-xl lg:text-3xl">
          {days < 10 ? "0" + days : days}
        </h1>
        <span>Days</span>
      </div>
      <div className=" text-center space-y-1 lg:space-y-2 flex items-center">
        <h1 className="text-red-500 font-bold text-xl lg:text-3xl">
          {hours < 10 ? "0" + hours : hours}
        </h1>
        <span>Hours</span>
      </div>
      <div className=" text-center space-y-1 lg:space-y-2 flex items-center">
        <h1 className="text-red-500 font-bold text-xl lg:text-3xl">
          {mins < 10 ? "0" + mins : mins}
        </h1>
        <span>Minutes</span>
      </div>
      <div className=" text-center space-y-1 lg:space-y-2 flex items-center">
        <h1 className="text-red-500 font-bold text-xl lg:text-3xl">
          {secs < 10 ? "0" + secs : secs}
        </h1>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default CountDown;
