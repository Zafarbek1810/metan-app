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
      color: #1F3C88;
    }

    .modal-wrapper {
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

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
          justify-content: center;
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

export{ClientsTableWrapper}