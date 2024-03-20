import { useState } from "react";

import "./App.css";
import Box from "./component/Box";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter", counter, "counter2 state:", counter2);
  };

  return (
    <>
      <div>
        {/* <h1>state</h1>
        <p>리액트가 리액트인 이유</p> */}
        <div>{counter}</div>
        <div>state:{counter2}</div>
        <button onClick={increase}>클릭</button>
      </div>
    </>
  );
}

export default App;
