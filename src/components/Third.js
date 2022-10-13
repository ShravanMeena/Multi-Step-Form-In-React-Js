import React from "react";

export default function Third({ onBackStep, onNextStep }) {
  return (
    <div>
      Third
      <button onClick={onNextStep}>FINAl</button>
      <button onClick={onBackStep}>Back</button>
    </div>
  );
}
