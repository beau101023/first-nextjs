import React from "react";
import Counter from "./Counter.js";

export default function CounterPair() {

  return (
    <div>
        <Counter amt={1} color="red"/>
        <Counter amt={2} color="blue"/>
    </div>
  );
}