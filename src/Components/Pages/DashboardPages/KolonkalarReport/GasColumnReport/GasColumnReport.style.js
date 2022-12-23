import styled from "styled-components";

const GasColumnReportWrapper=styled.div`
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
    color: #1F3C88;
    font-family: "Inter";
  }

  .filter {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 22px 13px 0;

  }

  .filter-state {
    background-color: #fff;
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    thead{
      width: 100%;

      tr{
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        //padding: 15px 22px;
        th.col{
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
          padding: 15px 12px 10px 20px;

        }
      }
    }

    tbody{
      background: #fff;
      tr{
        display: flex;
        justify-content: space-between;
        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          color: #000000;
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
          width: 40%;
          display: flex;
          justify-content: center;
          text-align: center;

          button {
            background: transparent;
            border: 1px solid #000;
            border-radius: 10px;
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

export{GasColumnReportWrapper, FilterWrapper}
