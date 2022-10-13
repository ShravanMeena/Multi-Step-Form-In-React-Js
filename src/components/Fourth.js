import React from "react";

export default function Fourth({ onBackStep }) {
  return (
    <div>
      I AM FINAL
      <button onClick={onBackStep}>Back</button>
    </div>
  );
}
