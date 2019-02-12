import React, { useState } from "react";
import Stopwatch from "./Components/Stopwatch";
import SplitTimeList from "./Components/SplitTimeList";

const App = () => {
  const [splitTimes, setSplitTimes] = useState([]);

  return (
    <div className="App">
      <h1>It's a Stopwatch</h1>
      <Stopwatch
        addToSplitTimes={time => {
          let newList = splitTimes;

          setSplitTimes([time].concat(newList));
        }}
        clearSplitTimes={() => setSplitTimes([])}
      />
      <SplitTimeList items={splitTimes} />
    </div>
  );
};
export default App;
