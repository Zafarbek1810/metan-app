import styled from "styled-components";

const ClientsTableWrapper=styled.div`
  .top {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #D2D3E8;
      font-family: "Rubik";
      margin-top: 15px;
    }

    .modal-wrapper {
      margin-top: 15px;

      .modal-body {
        .input {
          margin-bottom: 30px;

          label {
            font-size: 15px;

            span {
              color: red;
            }
          }
        }
      }

      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .btn {
          width: 45%;
          font-weight: 600;
        }
      }
    }
  }

  .filter {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 22px 13px 0;

    .dropdown {
      padding: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      background: #fff !important;

      .dropdown-menu {
        box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);
        border: none;

        .btns {
          display: flex;
          justify-content: end;

          .btn {
            margin: 0 10px;
          }

        }
      }

      .select {
        padding: 0 10px;
        margin-bottom: 10px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .input {
        padding: 0 10px;
        margin-bottom: 10px;
        width: 50%;
        display: flex;
        flex-direction: column;
      }


    }
  }


  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.03);

    .link {
      background: transparent;
      border: none;

      &:hover {
        color: #787EFF !important;
        //text-decoration: underline !important;
      }
    }

    thead {
      width: 100%;

      tr {
        display: flex;
        background: rgb(58, 62, 91);
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;

        th.col {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #D4D4EA;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Inter";
          padding: 15px 12px 10px 20px;
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
          text-align: center;
          font-family: "Inter";
        }
      }
    }

    tbody {
      background: #30334E;

      tr {
        display: flex;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        justify-content: space-between;

        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9FA0B8;
          text-align: center;
          font-family: "Inter";
          padding-left: 20px;


          .btns {
            width: 100%;

            button {
              width: 50%;
              cursor: pointer;
            }
          }
        }
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
    font-family: "Inter";
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
        font-family: "Inter";

        &:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }
      }
    }
  }
  
`

export{ClientsTableWrapper , ModalContent}