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

    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #7d8da7;
    }

    .sh-forms {
      margin-top: 45px;

      .sh-form-first {
        width: 45%;
        margin-bottom: 25px;

        @media (max-width: 768px) {
          width: 100%;
        }
      }

      .sh-form-second {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }

    hr {
      width: 100%;
      border-bottom: 1px solid #e9eef4;
      height: 0px;
      margin-top: 30px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    button.sh-continue {
      align-self: flex-end;
      margin-top: 20px;
      margin-bottom: 40px;
      width: 217px;
    }
  `,
};
