import { useState } from "react";
import OnboardingStep from "../../../molecules/OnboardingStep/onboardingStep.component";
import BusinessCategory from "../BusinessCategory/businessCategory.component";
import SocialHandles from "../SocialHandles/socialHandles.component";
import VerifyAccount from "../VerifyAccount/verifyAccount.component";
import { Style } from "./process.styles";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function OnboardingProcess() {
  const [step, setStep] = useState(1);

  return (
    <Style.Container>
      <div className="op-steps">
        <OnboardingStep
          step={step}
          index={1}
          text={"Verify Account"}
          complete={step > 1}
        />
        <OnboardingStep
          step={step}
          index={2}
          text={"Social Handles"}
          complete={step > 2}
        />
        <OnboardingStep step={step} index={3} text={"Business Category"} />
      </div>
      <span className="op-current">Step {step}/3</span>
      <div className="op-process">
        <SwitchTransition>
          <CSSTransition key={step} timeout={300} classNames={"anim-"}>
            <>
              {step === 1 && <VerifyAccount setStep={setStep} />}
              {step === 2 && <SocialHandles setStep={setStep} />}
              {step === 3 && <BusinessCategory />}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </Style.Container>
  );
}

export default OnboardingProcess;
