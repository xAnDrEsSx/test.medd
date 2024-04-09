"use client";

// ReactJS
import { useState } from "react";

// UI
import StepCode from "./StepCode";
import StepEmail from "./StepEmail";
import StepHeader from "./StepHeader";
import StepPassword from "./StepPassword";

export default function StepNavigation() {
    // State
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="flex flex-col items-center justify-center gap-10 m-auto">
            <StepHeader currentStep={currentStep} />

            {currentStep === 1 && <StepEmail setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <StepCode setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <StepPassword />}
        </div>
    );
}
