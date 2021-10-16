import styled from "styled-components";

export const Style = {
  Container: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    h2 {
      color: var(--dark);
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 34px;
    }

    .bc-form {
      margin-top: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .bc-pos {
      margin-top: 25px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        color: var(--dark);
      }
      .bc-pos-buttons {
        margin-top: 5px;
        margin-bottom: 25px;
      }
    }

    hr {
      width: 100%;
      border-bottom: 1px solid #e9eef4;
      height: 0px;
      margin-top: 25px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    button.bc-continue {
      align-self: flex-end;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  `,
  Button: styled.button`
    padding: 5px 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    transition: all 0.25s linear;
    background-color: ${({ active }) => (active ? "#DCEAFF" : "#F5F6FA")};
    border: ${({ active }) =>
      active ? "1px solid #006AFF" : "1px solid rgba(20, 23, 55, 0.1)"};
    margin-right: 21px;
    border-radius: 10px;
  `,
};
