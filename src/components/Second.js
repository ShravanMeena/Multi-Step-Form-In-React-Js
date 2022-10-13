import React from "react";
import Buttons from "./Buttons";
import * as animationData from "../assets/next.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Second({ onNext, onBack }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "60vh",
      }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
      <Buttons onNext={onNext} onBack={onBack} />
    </div>
  );
}
