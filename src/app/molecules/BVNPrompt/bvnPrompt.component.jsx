import { useState } from "react";
import { Style } from "./bvnPrompt.styles";

function BVNPrompt() {
  const [expand, setExpand] = useState(false);
  return (
    <Style.Container active={expand}>
      <div className="bvnp-header">
        <div className="bvnp-header-first">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 5V4.25C2.25 2.17893 3.92893 0.5 6 0.5C8.07107 0.5 9.75 2.17893 9.75 4.25V5C10.9926 5 12 6.00736 12 7.25V13.25C12 14.4926 10.9926 15.5 9.75 15.5H2.25C1.00736 15.5 0 14.4926 0 13.25V7.25C0 6.00736 1.00736 5 2.25 5ZM3.75 4.25C3.75 3.00736 4.75736 2 6 2C7.24264 2 8.25 3.00736 8.25 4.25V5H3.75V4.25Z"
              fill="#5257F5"
            />
            <path
              d="M6.75 10.7993C7.19835 10.54 7.5 10.0552 7.5 9.5C7.5 8.67157 6.82843 8 6 8C5.17157 8 4.5 8.67157 4.5 9.5C4.5 10.0552 4.80165 10.54 5.25 10.7993V11.75C5.25 12.1642 5.58579 12.5 6 12.5C6.41421 12.5 6.75 12.1642 6.75 11.75V10.7993Z"
              fill="#56F2C3"
            />
          </svg>
          <p>Why we need your BVN</p>
        </div>
        <div className="bvnp-header-second" onClick={() => setExpand(!expand)}>
          <span>{expand ? "Show" : "Hide"}</span>
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5L4 0.5L7 3.5"
              stroke="#5257F5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="bvnp-content">
        <p className="bvnp-content-p">We only need to access your:</p>
        <p>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
              fill="#56F2C3"
            />
          </svg>
          Full Name
        </p>
        <p>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
              fill="#56F2C3"
            />
          </svg>
          Phone Number
        </p>
        <p>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
              fill="#56F2C3"
            />
          </svg>
          Date of Birth
        </p>
        <hr></hr>
        <p className="bvnp-content-lock">
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
            <path d="M0 8.56H8V0.56H0V8.56Z" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_0:85" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0_0:85"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          Your BVN does not give us access to your bank accounts or transactions
        </p>
      </div>
    </Style.Container>
  );
}

export default BVNPrompt;
