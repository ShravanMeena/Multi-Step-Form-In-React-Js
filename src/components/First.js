import React from "react";

export default function First({ onNextStep, step }) {
  return (
    <div>
      <button onClick={onNextStep}>NEXT</button>
    </div>
  );
}
