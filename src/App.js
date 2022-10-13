import React, { useState } from "react";
import Header from "./components/Header";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import "./App.css";

import * as animationData from "./assets/completed.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const steps = {
  1: First,
  2: Second,
  3: Third,
  4: Fourth,
};

export default function App() {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  const onBack = () => {
    setStep(step - 1);
  };
  return (
    <div className="box">
      <div
        style={{
          padding: 20,
        }}
      >
        {step === 5 ? (
          <>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button onClick={() => setStep(1)}>RESTART</button>
            </div>
          </>
        ) : (
          <>
            <Header step={step} />

            <Step onNext={onNext} onBack={onBack} step={step} />
          </>
        )}
      </div>
    </div>
  );
}
