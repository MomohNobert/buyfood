import styled from "styled-components";

export const Style = {
  Container: styled.div`
    width: ${({ width }) => width};
    height: 81px;
    transition: all 0.25s linear;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      color: var(--dark);
      font-family: "DM Sans";
      pointer-events: none;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      height: 54px;
      background: var(--white);
      border-radius: 12px;
      padding: 10px;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #161d25;
      border: 1px solid #e4e9ef;
      display: flex;
      align-items: center;

      ::placeholder {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        color: #7d8da7;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `,
};
