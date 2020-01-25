import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increamentCount = () => {
    setCount(count + 1);
  };

  return <button onClick={increamentCount}>I was clicked {count} times</button>;
};

export default App;
