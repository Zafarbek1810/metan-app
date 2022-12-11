import styled from "styled-components";

const GasColumnReportWrapper=styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #1F3C88;
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

  .table {
    margin-top: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    thead {
      width: 100%;

      tr {
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        padding: 22px 13px;

        th.col {
          font-style: normal;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        th.row {
          font-style: normal;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
        }
      }
    }

    tbody {
      background: #fff;

      tr {
        display: flex;
        justify-content: space-between;
        padding: 10px 22px;

        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 0.8125rem;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          text-align: center;

          img {
            width: 50px;
            height: 50px;
          }

          .btns {
            button {
              background: transparent;
              border: none;
              cursor: pointer;
            }

            width: 40%;
            display: flex;
            justify-content: center;
          }
        }

        td.row {
          font-style: normal;
          font-weight: 600;
          font-size: 0.8125rem;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
        }
      }
    }
  }
`

const FilterWrapper = styled.div`
  position: relative;
  display: inline-block;
  
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
