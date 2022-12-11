import styled from "styled-components";

const ShiftsTableWrapper=styled.div`
  .top{
    min-width: 100% !important;
    display: flex;
    margin-bottom: 30px;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
    }
    
    .modalWrapper{
      margin-left: 200px;
    }
  }
  
  .table-responsive{
    width: 1400px;
    background: #fff;
    overflow-x: scroll;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  }
  .table {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    thead {
      width: 100%;

      tr {
        display: flex;
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        padding: 15px 22px;

        th.col {
          min-width: 10% !important;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
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
        padding: 0px 22px;

        td.col {
          min-width: 10% !important;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          text-align: center;
          font-family: "Inter";


          .btns {
            width: 100%;
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
                fill: none;
                stroke: none;
              }
            }
          }
        }

        &:nth-child(even) {
          background-color: #f2f2f2;
        }

        td.row {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
        }
      }
    }
  }

  

`

const ModalContent=styled.div`
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



export {ShiftsTableWrapper, ModalContent}