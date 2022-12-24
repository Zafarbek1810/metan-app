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
      color: #D2D3E8;
      font-family: "Rubik";
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
      background: #30334E;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      width: 48%;
      margin-bottom: 20px;
      /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.03); */
      //box-shadow: 0px 2px 10px rgba(58, 53, 65, 0.1);
      box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;
      border: 1px solid rgba(58, 53, 65, 0.12);
      border-radius: 24px;
    
      &:nth-child(2){
        .left {
          background: rgb(255, 77, 73, 0.12);
          border-radius: 12px;
          padding: 10px;
        }
      }
      &:nth-child(3){
        .left {
          background: rgb(253, 181, 40, 0.12);
          border-radius: 12px;
          padding: 10px;

          svg {
            width: 30px;
            height: 30px;
            stroke: rgb(102, 108, 255);
          }
        }
      }
      &:nth-child(4){
        .left {
          background: rgb(114, 225, 40, 0.12);
          border-radius: 12px;
          padding: 10px;

          svg {
            width: 30px;
            height: 30px;
            stroke: rgb(102, 108, 255);
          }
        }
      }
      &:nth-child(6){
        .left {
          background: rgb(102, 108, 255, 0.12);
          border-radius: 12px;
          padding: 10px;
        
          svg {
            width: 30px;
            height: 30px;
            stroke: rgb(102, 108, 255);
          }
        }
      }

      .left {
        background: rgb(38, 198, 249, 0.12);
        border-radius: 12px;
        padding: 10px;

        svg {
          width: 30px;
          height: 30px;
          stroke: rgb(38, 198, 249);
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;

        span {
          font-size: 21px;
          font-weight: 700;
          color: #D2D3E8;
          font-family: "Rubik";

        }

        p {
          font-family: "Rubik";
          font-size: 15px;
          color: #9FA0B8;
          margin-bottom: 0;
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
      border-radius: 24px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      padding: 15px;

      &:nth-child(1) {
        background: linear-gradient(135deg, #8E2DE2, #4A00E0 100%);
      }

      &:nth-child(2) {
        background: linear-gradient(135deg, #f12711 0%, #f5af19 100%);
      }

      &:nth-child(3) {
        background: linear-gradient(135deg, #4facfe 50%, #00f2fe 100%);
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
        margin-left: 10px;
        width: 75%;

        .title {
          font-size: 16px;
          font-family: "Rubik";
          color: #fff;
        }
        
        .bot{
          display: flex;
          justify-content: space-between;
        }

        span {
          font-weight: 700;
          font-size: 20px;
          font-family: "Rubik";
          color: #fff;
        }

        svg {
          width: 25px;
          height: 25px;
          fill: #fff;
          stroke-width: 2;
        }

        .persent {
          margin-left: 50px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          padding: 5px;
          border-radius: 5px;
          border: none;
          background: #4BB543;
          display: flex;
          //background: #F4362B; danger
          font-family: "Rubik";
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