import React, { useState } from "react";

function Get_time() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [Time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1 className="Time">{Time}</h1>
    </div>
  );
}

export default Get_time;
