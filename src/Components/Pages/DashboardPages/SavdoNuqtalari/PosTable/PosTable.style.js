import styled from "styled-components";

const PosTableWrapper = styled.div`
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
  }

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.03);
    box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;

    thead {
      width: 100%;

      tr {
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #F5F5F7;
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;

        th.col {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.7);
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
      background: #fff;

      img {
        object-fit: cover;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      tr {
        display: flex;
        //justify-content: space-between;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);

        td.col {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.7);
          text-align: center;
          font-family: "Inter";
          padding-left: 20px;

          .btns {
            width: 60%;
            display: flex;
            justify-content: space-between;

            button {
              cursor: pointer;
              transition: 300ms;
              background: transparent;

              &:nth-child(1) {
                svg {
                  fill: none;
                  width: 20px;
                  height: 20px;
                  fill: rgb(255, 77, 73);
                }
              }

              &:nth-child(2) {
                svg {
                  fill: none;
                  width: 20px;
                  height: 20px;
                  fill: rgb(253, 181, 40);
                }
              }


            }
          }
        }
      }
    }
  }
`

export { PosTableWrapper }