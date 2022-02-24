import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clearInterval(interval);
      if (isNaN(event.target.value)) {
        setCount(0);
        return;
      }
      setCount(parseInt(event.target.value));
    }
    return;
  };

  let interval = setInterval(() => {
    clearInterval(interval);
    if (count <= 0) {
      return;
    }
    setCount((count) => count - 1);
  }, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
