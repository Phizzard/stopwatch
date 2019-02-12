import React, { useState, useEffect } from "react";
import { func } from "prop-types";
import styled from "styled-components";

import Button from "./Button";

const StyledStopwatch = styled.div`
  display: flex;
  justify-content: center;
`;

const Time = styled.h2``;

const Stopwatch = ({ addToSplitTimes, clearSplitTimes }) => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      let timerID = setInterval(() => {
        setTime(time + 1);
      }, 10);

      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

  const formattedTime = () => {
    let date = new Date(null);

    date.setMilliseconds(time * 10);

    return date.toISOString().substring(14, 21);
  };

  return (
    <div>
      <StyledStopwatch>
        <Time>{formattedTime()}</Time>
      </StyledStopwatch>
      <Button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}
      </Button>
      <Button
        onClick={() => {
          if (!start) {
            setTime(0);
            clearSplitTimes();
          }
        }}
      >
        Reset
      </Button>
      <Button onClick={() => start && addToSplitTimes(formattedTime())}>
        Split
      </Button>
    </div>
  );
};
Stopwatch.propTypes = {
  addToSplitTimes: func,
  clearSplitTimes: func
};
export default Stopwatch;
