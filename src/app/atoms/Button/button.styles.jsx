import styled, { css } from "styled-components";

const primaryButtonStyles = css`
  background-color: var(--primary);
  border: 1px solid var(--primary);
  color: var(--white);
`;

const secondaryButtonStyles = css`
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  color: var(--white);
`;

function getButtonStyle(props) {
  if (props.second) {
    return secondaryButtonStyles;
  }

  return primaryButtonStyles;
}

export const Style = {
  Container: styled.button`
    width: 107px;
    height: 50px;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    transition: background-color 0.25s ease-in;
    user-select: none;
    cursor: pointer;
    font-family: "DM Sans";
    transition: transform 0.05s linear;
    transform: ${({ clicked }) => (clicked ? "scale(0.95)" : "")};
    display: grid;
    place-items: center;

    ${getButtonStyle}
  `,
};
