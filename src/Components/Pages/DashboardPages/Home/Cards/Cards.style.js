import styled from "styled-components";

const CardsWrapper = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 15px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
      font-family: "Inter";
    }

    .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .cards {
    width: 66%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div {
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      width: 48%;
      margin-bottom: 20px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.03);
      //box-shadow: 0px 2px 10px rgba(58, 53, 65, 0.1);
      border: 1px solid rgba(58, 53, 65, 0.12);
      border-radius: 24px;

      .left {
        background: #1F3C88;
        border-radius: 50%;
        padding: 10px;

        svg {
          width: 30px;
          height: 30px;
          stroke: #fff;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: end;

        span {
          font-size: 21px;
          font-weight: 700;
          color: #495057;
          font-family: "Inter";

        }

        p {
          font-family: "Inter";
          font-size: 15px;
          color: #74788d;
        }
      }
    }
  }

  .statistic {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      width: 90%;
      box-shadow: 0px 2px 10px rgba(58, 53, 65, 0.1);
      //border: 1px solid rgba(58, 53, 65, 0.12);
      border-radius: 24px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      padding: 15px;
      //background: #fff;
      //background:linear-gradient(135deg, #42e695 0%,#3bb2b8 100%);

      &:nth-child(1) {
        background: linear-gradient(135deg, #0FF0B3 0%, #036ED9 100%);
      }

      &:nth-child(2) {
        background: linear-gradient(135deg, #184e68 0%, #57ca85 100%);
      }

      &:nth-child(3) {
        background: linear-gradient(135deg, #5b247a 0%, #1bcedf 100%);
      }

      .left {
        background: #fff;
        border-radius: 12px;
        padding: 10px;
        border: 1px solid rgba(58, 53, 65, 0.12);


        svg {
          width: 30px;
          height: 30px;
          fill: #1F3C88 !important;
        }
      }

      .right {
        margin-left: 30px;

        .title {
          font-size: 16px;
          font-family: "Inter";
          color: #fff;
        }

        span {
          font-weight: 700;
          font-size: 20px;
          font-family: "Inter";
          color: #fff;


        }

        svg {
          margin: 0 10px;
          width: 25px;
          height: 25px;
          stroke: rgb(76, 255, 36);
          stroke-width: 2;
        }

        .persent {
          font-size: 16px;
          font-weight: 700;
          color: rgb(76, 255, 36);
          font-family: "Inter";
        }
      }
    }
  }

  @media (max-width: 992px) {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;

      .filter {
        width: 100%;
      }
    }

    .cards {
      & > div {
        width: 48%;
      }
    }
  }

  @media (max-width: 690px) {
    .cards {
      & > div {
        width: 100%;
      }
    }
  }

`


export {CardsWrapper}