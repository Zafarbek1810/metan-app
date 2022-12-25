import styled from "styled-components";

const GasColumnReportWrapper = styled.div`
  font-family: "Inter" !important;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 15px;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Rubik";
  }

  .filter {
    display: flex;
    align-items: center;
    background: transparent;
    padding: 22px 13px 0;

  }

  .filter-state {
    background-color: transparent;
    padding: 15px;

    &__inner {
      padding: 5px 10px;
      border-radius: 15px;
      background-color: #e9e9e9;
      
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        background: #F5F5F7;
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
          text-align: start;
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
          //padding: 0px 30px;
          padding-left: 20px;
          

        }
        

        img{
          width: 50px;
          height: 50px;
        }

        .btns {
          width: 60%;
          display: flex;
          justify-content: center;

          button {
            cursor: pointer;
            transition: 300ms;
            background: transparent;

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
`

const FilterWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: "Inter";
  
  .filter-content {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;

    min-width: 400px;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

export { GasColumnReportWrapper, FilterWrapper }
