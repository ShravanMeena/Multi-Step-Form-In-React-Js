import React from "react";

export default function Second({ onNextStep, onBackStep, step }) {
  return (
    <div>
      Second
      <button onClick={onNextStep}>NEXT</button>
      <button onClick={onBackStep}>Back</button>
    </div>
  );
}
