import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count + 1)} className="counter">
        +
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)} className="counter">
        -
      </button>
    </div>
  );
}

export default Counter;
