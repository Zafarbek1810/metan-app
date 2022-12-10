import styled from "styled-components";

const CashboxWrapper = styled.div`
  .top {

  }

  .bottom {
    background: #fff;
    padding: 10px;

    .head {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;

      button {
        margin-left: auto;
        background: transparent;
        border: none;
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
          }

          svg {
            width: 20px;
            height: 20px;
            stroke: rgba(0, 0, 0, 0.6);
            margin-right: 10px;
          }
        }

        .right {
          p {
            font-size: 16px;
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
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

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
const Tab2Wrapper = styled.div`
  background: #fff;
  padding: 15px;
  border: 1px solid #1F3C88;
}
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
