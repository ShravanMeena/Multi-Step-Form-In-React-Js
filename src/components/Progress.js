import React from "react";

export default function Progress({ step }) {
  const result = Math.round((step / 4) * 100);

  return (
    <div
      style={{
        height: "8px",
        borderRadius: "5px",
        width: "100%",
        backgroundColor: "gray",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "block",
          height: "100%",
          borderRadius: "5px",
          width: `${result}%`,
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
}
