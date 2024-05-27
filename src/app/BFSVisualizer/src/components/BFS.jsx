import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import bfs, { graph } from "../utils/algos/bfs";

import FlowChart from "./FlowChart";

import * as types from "../redux/types";

const BFS = ({ traverse }) => {
  const [bfsInstance, setBfsInstance] = useState();
  const dispatch = useDispatch();
  const FIND="I"
  const initialize = () => {
    const newBfs = bfs(graph, "A", FIND);
    setBfsInstance(newBfs);
    dispatch({ type: types.RESET });
  };

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveToNext = () => {
    if (!traverse.found) {
      dispatch({ type: types.NEXT, payload: bfsInstance.next().value });
    }
  };

  return (
    <div>
      <FlowChart focus={traverse.current} />
      <div>
        <button onClick={moveToNext}>Next</button>{" "}
        <button onClick={initialize}>Reset</button>
      </div>
      <p>
        {traverse.found ? `Found ${FIND} in ${traverse.steps} steps` : traverse.steps}
      </p>
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  traverse: (state) => state.traverse,
});

export default connect(structuredSelector)(BFS);
