import styled from "styled-components";

const ShiftsTableWrapper = styled.div`
  font-family: "Inter";
  max-width: 100%;

  .top {
    max-width: 100% !important;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 15px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.7);
      font-family: "Rubik";
    }

    .modalWrapper {
    }
  }

  .statistika {
    width: 40%;
    margin-left: auto;
    margin-bottom: 20px;
    .card {
      border-radius: 12px;
      background-color: #fff;
      padding: 15px;
      box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;

      h5 {
        color: rgba(0, 0, 0, 0.7);
        font-family: "Rubik";
        margin-bottom: 13px;
      }

      .wrap {
        display: flex;
        .left {
          width: 50%;
          display: flex;
          .icon {
            background: rgb(255, 77, 73, 0.12);
            border-radius: 12px;
            padding: 10px;
            svg {
              width: 30px;
              height: 30px;
            }
          }

          .bot {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            
            p{
              color: rgba(0, 0, 0, 0.7);
              margin-bottom: 0;
            }
            span{
              font-weight: 700;
              font-size: 18px;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }

        .right {
          width: 50%;
          display: flex;
          .icon {
            background: rgb(114, 225, 40, 0.12);
            border-radius: 12px;
            padding: 10px;

            svg {
              width: 30px;
              height: 30px;
              stroke: rgb(102, 108, 255);
            }
          }

          .bot {
            margin-left: 15px;
            display: flex;
            flex-direction: column;

            p{
              color: rgba(0, 0, 0, 0.7);
              margin-bottom: 0;
            }
            span{
              font-weight: 700;
              font-size: 18px;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }

    }
  }

  .filter {
    background-color: transparent;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .filter-state {
    padding: 10px 0;

    &__inner {
      padding: 10px;
      border-radius: 15px;
      background-color: #e9e9e9;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }


  .table-responsive {
    //width: 1100px;
    width: 82vw;
    background: #f5f5f9;
    border-radius: 6px 6px 0px 0px;
    overflow-x: scroll;
    //box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.03);
    box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;

  }

  .table {
    width: 100% !important;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    thead {
      width: 100%;

      tr {
        display: flex;
        background: #f5f5f9;
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;


        th.col {
          min-width: 9% !important;
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 24px;
          color: rgb(0, 0, 0);
          display: flex;
          align-items: center;
          justify-content: center;
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
        //border-bottom: 1px solid rgba(159, 160, 184, 0.3);


        td.col {
          min-width: 9% !important;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          //color: rgba(0, 0, 0, 0.7);
          color: #000;
          text-align: center;
          font-family: "Inter";

        }

        .btns {
          width: 40%;
          display: flex;
          margin-left: 20px;
          justify-content: start;

          button {
            cursor: pointer;
            transition: 300ms;
            background: transparent;
            

            svg {
              fill: none;
              width: 20px;
              height: 20px;
              fill: rgb(255, 77, 73);
            }
          }
        }

      }
    }
  }
`

const ModalContent = styled.div`
  //padding: 20px;
  border-bottom: 1px solid #f5f6f8;
  background: #fff;
  
  form{
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
      margin-bottom: 20px;

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
        padding: 5px 5px;
      }

      span.err-text {
        color: red !important;
        position: absolute;
        left: 0;
        top: 60px;
      }
      .select{
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        color: #000000;
        .css-319lph-ValueContainer{
          padding: 15px 10px;
        }
        .css-1s2u09g-control{
          height: 60px;
        }
        .css-1okebmr-indicatorSeparator{
          display: none;
        }
      }
    }
    
    .btns{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      button{
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



export { ShiftsTableWrapper, ModalContent }