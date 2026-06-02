import { useState } from "react";

import StepIndicator from "../StepIndicator";

import Step1Tjanst from "./Step1Tjanst";
import Step2Fastighet from "./Step2Fastighet";
import Step3Yta from "./Step3Yta";
import Step4Standard from "./Step4Standard";
import Step5Timing from "./Step5Timing";
import StepSummary from "./StepSummary";
import StepContact from "./StepContact";

export default function AllSteps() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    tjanst: "",
    fastighet: "",
    yta: 100,
    standard: "",
    timing: "",
  });

  function handleChange(field, value) {
    setAnswers(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  function next() {
    setStep(prev => prev + 1);
  }

  function back() {
    setStep(prev => prev - 1);
  }

  return (
    <div className="quote-wizard">
      <StepIndicator current={step} total={7} />

      {step === 1 && (
        <Step1Tjanst
          answers={answers}
          onChange={handleChange}
          onNext={next}
        />
      )}

      {step === 2 && (
        <Step2Fastighet
          answers={answers}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <Step3Yta
          answers={answers}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 4 && (
        <Step4Standard
          answers={answers}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 5 && (
        <Step5Timing
          answers={answers}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 6 && (
        <StepSummary
          answers={answers}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 7 && (
        <StepContact
          answers={answers}
          onBack={back}
        />
      )}
    </div>
  );
}