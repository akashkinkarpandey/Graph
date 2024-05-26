'use client'
import React, { useEffect } from "react";
import { init } from "./drawBinaryTree";

const LeetcodeTreeVisualizer = () => {
  useEffect(() => {
    setTimeout(() => {
      init(2);
    },2000)
  },[])
  return (
    <main className="text-white">
      <h1 className="text-3xl font-bold text-center mt-1">Leetcode Tree Visualizer</h1>
      <section id="inputContainer" className="">
        <textarea id="input " rows={5} className=" border-4"/>
        <div id="actionBtns" className="flex">
          <button id="applyBtn" className="btn btn-accent">Apply</button>
          <button id="clearBtn" className="btn btn-secondary ml-14">Clear</button>
        </div>
      </section>
      <canvas></canvas>
    </main>
  );
};

export default LeetcodeTreeVisualizer;
