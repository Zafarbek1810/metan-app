import styled from "styled-components";

const DebtorsTableWrapper = styled.div`
  .title{
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Rubik";
    margin-top: 15px;
  }
  .filter{
    display: flex;
    background: #fff;
    padding: 22px 13px 0;

  }

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
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
        
      }
    }

    tbody {
      background: #fff;

      tr {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        

        td.col {
          padding-left: 20px;
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
      }
    }
  }
`

export { DebtorsTableWrapper }