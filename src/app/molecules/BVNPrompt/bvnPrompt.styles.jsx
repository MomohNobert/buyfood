import styled from "styled-components";

export const Style = {
  Container: styled.div`
    width: 100%;
    transition: height 0.25s linear;
    height: ${({ active }) => (active ? "200px" : "62px")};
    padding: 0px 25px;
    background: #e9eef4;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;

    .bvnp-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 62px;
    }

    .bvnp-header-first,
    .bvnp-header-second {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      p {
        color: var(--dark);
        font-size: 12px;
        line-height: 16px;
        margin-left: 15px;
        font-weight: 500;
      }

      span {
        color: #5257f5;
        height: 12px;
        font-family: "DM Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 9px;
        line-height: 12px;
        margin-right: 5px;
        cursor: pointer;
      }
    }

    .bvnp-header-second {
      svg {
        transition: transform 0.25s linear;
        transform: ${({ active }) =>
          active ? "rotate(180deg)" : "rotate(0deg)"};
      }
    }

    .bvnp-content {
      margin-left: 27.5px;
      width: 100%;
      transition: opacity 0.75s ease-in;
      opacity: ${({ active }) => (active ? 1 : 0)};

      p {
        color: rgba(20, 23, 55, 0.7);
        font-weight: normal;
        font-size: 11px;
        line-height: 14px;
        display: flex;
        align-items: center;
        margin-bottom: 7px;

        svg {
          margin-right: 6px;
        }
      }

      p.bvnp-content-p {
        margin-bottom: 10px;
      }

      hr {
        width: calc(100% - 27.5px);
        border-bottom: 1px solid #a5b4cb;
        height: 0px;
        margin: 13px 0px;
      }

      p.bvnp-content-lock {
        font-size: 11px;
        line-height: 15px;
        color: var(--dark);
        margin-top: 5px;
        max-width: 85%;
      }
    }
  `,
};
