import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  const increamentCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <React.Fragment>
      <h2>Counter</h2>
      <button onClick={increamentCount}>I was clicked {count} times</button>

      <h2>Toggle Light</h2>
      <div
        style={{
          height: "50px",
          width: "50px",
          background: isOn ? "yellow" : "gray"
        }}
        onClick={toggleLight}
      />
    </React.Fragment>
  );
};

export default App;
