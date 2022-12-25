import styled from "styled-components";

const CashboxWrapper = styled.div`
  font-family: "Inter";
  margin-top: 20px;
  .top {

  }

  .bottom {
    background: #fff;
    padding: 10px;
    border: 1px solid #1F3C88;


    .head {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;

      button {
        margin-left: auto;
        background: transparent;
        border: none;

        svg {
          fill: none;
          width: 20px;
          height: 20px;
          fill: rgb(253, 181, 40);
        }
      }
    }

    .wrapper {
      .col {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;

          h4 {
            font-size: 18px;
            font-weight: 400;
            font-family: "Inter";
            color: rgba(0, 0, 0, 0.7);
          }

          svg {
            width: 20px;
            height: 20px;
            stroke: rgba(0, 0, 0, 0.7);
            margin-right: 10px;
          }
        }

        .right {
          p {
            font-size: 16px;
            font-family: "Inter";
          }
        }
      }
    }

    .table {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: "Inter";

      thead {
        width: 100%;

        tr {
          display: flex;
          //justify-content: space-between;
          //background: rgba(31, 60, 136, 0.1);
          background: #fff;
          border-radius: 6px 6px 0px 0px;
          padding: 22px 13px;

          th.col {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #1F3C88;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
            font-family: "Inter";
          }

          th.row {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #1F3C88;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
            font-family: "Inter";
          }
        }
      }

      tbody {
        background: #fff;

        tr {
          display: flex;
          justify-content: space-between;
          padding: 10px 22px;

          td.col {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            //display: flex;
            align-items: center;
            justify-content: start;
            color: #000000;
            text-align: center;
            font-family: "Inter";
            padding-left: 20px;
            

            .btns {
              button {
                background: transparent;
                border: none;
                cursor: pointer;
              }

              //width: 40%;
              //display: flex;
              justify-content: space-between;
            }
          }

          td.row {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
            font-family: "Inter";
          }
        }
      }
    }
  }

`

const Tab1Wrapper = styled.form`
  background: #fff;
  padding: 15px;
  border: 1px solid #1F3C88;

  .label {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;

    span.label-text {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 18px;
      color: #000000;
      margin-bottom: 8px;
      font-family: "Inter";
    }

    input {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 16px;
      color: #000000;
      border: 2px solid rgba(31, 60, 136, 0.4);
      border-radius: 6px;
      padding: 10px 10px;
      font-family: "Inter";
    }

    span.err-text {
      color: red !important;
      position: absolute;
      left: 0;
      top: 70px;
      font-family: "Inter";
    }

    .select {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
      color: #000000;
      font-family: "Inter";

      .css-319lph-ValueContainer {
        padding: 15px 10px;
      }

      .css-1s2u09g-control {
        height: 60px;
      }

      .css-1okebmr-indicatorSeparator {
        display: none;
      }
    }
`
const Tab2Wrapper = styled.div`
  background: #fff;
  padding: 15px;
  border: 1px solid #1F3C88;

  .label {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;

    span.label-text {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 18px;
      color: #000000;
      margin-bottom: 8px;
    }

    input {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 16px;
      color: #000000;
      border: 2px solid rgba(31, 60, 136, 0.4);
      border-radius: 6px;
      padding: 10px 10px;
    }

    span.err-text {
      color: red !important;
      position: absolute;
      left: 0;
      top: 70px;
    }

    .select {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
      color: #000000;

      .css-319lph-ValueContainer {
        padding: 15px 10px;
      }

      .css-1s2u09g-control {
        height: 60px;
      }

      .css-1okebmr-indicatorSeparator {
        display: none;
      }
    }

`
const Tab3Wrapper = styled.form`
  background: #fff;
  padding: 15px;
  border: 1px solid #1F3C88;
  font-family: "Inter";

  .label {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;

    span.label-text {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 18px;
      color: #000000;
      margin-bottom: 8px;
    }

    input {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 16px;
      color: #000000;
      border: 2px solid rgba(31, 60, 136, 0.4);
      border-radius: 6px;
      padding: 10px 10px;
    }

    span.err-text {
      color: red !important;
      position: absolute;
      left: 0;
      top: 70px;
    }

    .select {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
      color: #000000;

      .css-319lph-ValueContainer {
        padding: 15px 10px;
      }

      .css-1s2u09g-control {
        height: 60px;
      }

      .css-1okebmr-indicatorSeparator {
        display: none;
      }
    }
  
`


export {
  CashboxWrapper,
  Tab1Wrapper,
  Tab2Wrapper,
  Tab3Wrapper
}
