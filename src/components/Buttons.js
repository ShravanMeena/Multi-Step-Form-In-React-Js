import React from "react";

export default function Buttons({ onNext, onBack, step }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {onBack && <button onClick={onBack}>Go Back</button>}
      {onNext && (
        <button style={{ marginLeft: 10 }} onClick={onNext}>
          {step === 4 ? "FINAL" : "NEXT"}
        </button>
      )}
    </div>
  );
}
