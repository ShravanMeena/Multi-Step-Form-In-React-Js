import React from "react";
import "../App.css";
export default function Header({ step }) {
  let result = Math.round((step / 4) * 100);
  return (
    <div className="header">
      <div className="headerTop">
        <h4>Create Account</h4>
        <h4>X</h4>
      </div>

      {/* progress baar */}

      <div
        style={{
          height: "8px",
          width: "100%",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            display: "block",
            height: "100%",
            width: `${result}%`,
            backgroundColor: "#088538",
          }}
        ></div>
      </div>
    </div>
  );
}
