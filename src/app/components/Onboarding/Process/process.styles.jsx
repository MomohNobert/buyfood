import styled from "styled-components";

export const Style = {
  Container: styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .op-steps {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e9eef4;
      padding-bottom: 20px;
      width: 100%;

      @media (max-width: 768px) {
        border-bottom: none;
      }
    }

    .op-process {
      overflow: hidden;
    }

    span.op-current {
      margin-top: 40px;
      color: #a5b4cb;
      font-size: 13px;
      line-height: 17px;
    }

    .op-process {
      width: 100%;
    }

    .anim--enter {
      transform: translateX(100%);
    }
    .anim--enter-active {
      transform: translateX(0);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .anim--enter-done {
      transform: translateX(0);
    }

    .anim--exit {
      transform: translateX(0);
    }
    .anim--exit-active {
      transform: translateX(-100%);
      transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1);
    }
    .anim--exit-done {
      transform: translateX(-100%);
    }
  `,
};
