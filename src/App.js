import React, { useState } from "react";
import First from "./components/First";
import Progress from "./components/Progress";
import Fourth from "./components/Fourth";
import Second from "./components/Second";
import Third from "./components/Third";
import Fifth from "./components/Fifth";

const steps = {
  1: First,
  2: Second,
  3: Third,
  4: Fourth,
  5: Fifth,
};

export default function App() {
  const [step, setStep] = useState(1);

  let Step = steps[step];

  const onNextStep = () => {
    setStep(step + 1);
  };
  const onBackStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      <Progress step={step} />
      <Step step={step} onNextStep={onNextStep} onBackStep={onBackStep} />
    </div>
  );
}
