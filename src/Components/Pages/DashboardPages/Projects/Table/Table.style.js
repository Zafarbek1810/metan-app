import styled from "styled-components";

const TableWrapper=styled.div`
  .bottom{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .top {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.7);
      font-family: "Rubik";
    }

    .statistika {
      width: 60%;
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
          justify-content: space-between;
          .left {
            width: 30%;
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
            width: 30%;
            display: flex;
            .icon {
              background: rgb(253, 181, 40, 0.12);
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
          .right2 {
            width: 30%;
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
  }

  .table{
    margin-top: 20px;
    //box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;

    thead{
      width: 100%;
      tr{
        display: flex;
        background: #f5f5f7;
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;

        th.col{
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
          padding: 15px 12px 10px 20px;

        }

      }
    }

    tbody{
      background: #fff;
      tr{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);

        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          color: rgba(0, 0, 0, 0.7);
          text-align: start;
          font-family: "Inter";
          padding-left: 20px;

        }
        td.row{
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

        img{
          width: 50px;
          height: 50px;
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

export{ TableWrapper }