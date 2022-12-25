import styled from "styled-components";

const ChekTableWrapper = styled.div`
  //padding: 40px 30px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Rubik";
    margin-top: 15px;
  }
  .filter {
    display: flex;
    align-items: center;
    background: transparent;
    padding: 22px 13px;
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

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;
    border-style: hidden;
    border-radius: 20px !important;

    thead {
      width: 100%;

      tr {
        display: flex;
        background: #F5F5F7;
        //padding: 10px 12px 0px;
        border-radius: 24px 24px 0px 0px;
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
          padding: 15px 12px 10px 20px;
          font-family: "Inter";

        }

      }
    }

    tbody {
      background: #fff;

      tr {
        display: flex;
        justify-content: space-between;
        //padding: 0px 12px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);

        td.col {
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.7);
          //text-align: center;
          font-family: "Inter";
          padding-left: 20px;
          

          .link:hover {
            text-decoration: underline !important;
          }
          
          td.col:last-child{
            border-radius: 0px 0px 24px 24px ;

          }
        }

        td.row {
          font-size: 18px;
          line-height: 18px;
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

export { ChekTableWrapper, FilterWrapper }