import React, { useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";

import { getNodes, initialEdges } from "../utils/chart/data";

import "reactflow/dist/style.css";

const FlowChart = ({ focus }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const chartNodes = getNodes(focus);
    setNodes(chartNodes);
  }, [focus, setNodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      attributionPosition="top-right"
      defaultZoom={1.5}
      minZoom={0.2}
      maxZoom={4}
    />
  );
};

export default FlowChart;
