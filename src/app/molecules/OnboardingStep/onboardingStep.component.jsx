import { Style } from "./onboardingStep.styles";

function OnboardingStep({ step, index, text, complete }) {
  return (
    <Style.Container active={step === index} complete={complete}>
      <div>
        {complete ? (
          <svg
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99854 4.49751L5.00103 7.5L11.0013 1.5"
              stroke="#006AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <p className="op-index">{index}</p>
        )}
      </div>
      <p className="op-step">{text}</p>
    </Style.Container>
  );
}

export default OnboardingStep;
