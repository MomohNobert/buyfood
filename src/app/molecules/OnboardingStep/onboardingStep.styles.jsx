import styled from "styled-components";

export const Style = {
  Container: styled.div`
    min-width: 127px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 40px;

    div {
      transition: all 0.25s linear;
      background: ${({ active, complete }) => {
        if (complete) {
          return "#DCEAFF";
        } else if (active) {
          return "#006AFF";
        } else {
          return "#E4E9EF";
        }
      }};
      height: 31px;
      width: 31px;
      margin-right: 12px;
      display: grid;
      place-items: center;
      color: ${({ active }) => (active ? "var(--white)" : "#A5B4CB")};
      border-radius: 3.1px;
    }

    p.op-step {
      transition: color 0.25s linear;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      color: ${({ active }) => (active ? "var(--dark)" : "#A5B4CB")};
    }

    p.op-index {
      font-weight: 500;
    }

    @media (max-width: 768px) {
      display: ${({ active, complete }) => {
        if (complete) {
          return "none";
        } else if (active) {
          return "flex";
        } else {
          return "none";
        }
      }};

      div {
        height: 45px;
        width: 45px;
      }
      p.op-step {
        display: none;
      }
    }
  `,
};
