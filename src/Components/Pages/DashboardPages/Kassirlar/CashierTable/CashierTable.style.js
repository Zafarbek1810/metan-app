import styled from "styled-components";

const CashierTableWrapper = styled.div`
  .top {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
    }
  }

  .table {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    thead {
      width: 100%;

      tr {
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        padding: 15px 22px;

        th.col {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
        }

        th.row {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: start;
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
          display: flex;
          align-items: center;
          justify-content: start;
          color: #000000;
          text-align: center;
          font-family: "Inter";
        }

        img {
          width: 50px;
          height: 50px;
        }

        .btns {
          width: 50%;
          display: flex;
          justify-content: space-between;

          button {
            background: transparent;
            border: 1px solid #000;
            cursor: pointer;
            transition: 300ms;

            &:hover {
              background: rgba(31, 60, 136, 0.75);

            }

            svg {
              fill: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }

      td.row {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: start;
        text-align: start;
        font-family: "Inter";
      }
    }
  }
}
`

const ModalHeader = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f6f8;
  padding: 20px 20px 5px 20px;

  h2.title {
    margin-bottom: 0;
    font-size: 25px !important;
  }

  svg {
    height: 20px;
    width: 20px;
    color: #000;
  }

  button.closeSvg {
    background: transparent;
    border: none;
  }
`


const ModalContent = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f5f6f8;
  background: #fff;

  form {
    background: #fff;

    .label {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
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
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      button {
        width: 100%;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 18px;
        border-radius: 4px;
        padding: 12px 22px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }
      }
    }
  }

`

export {
  CashierTableWrapper,
  ModalHeader,
  ModalContent,
}