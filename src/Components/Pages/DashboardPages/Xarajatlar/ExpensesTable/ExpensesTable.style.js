import styled from "styled-components";

const ExpensesTableWrapper=styled.div`
  .top{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
      font-family: "Inter";
    }
    
    .summ{
      display: flex;
      align-items: center;
      h3{
        margin: 0 15px 0 0;
        font-family: "Inter";
      }
      p{
        margin: 0;
        font-family: "Inter";
      }
    }
  }
  
  .filter {
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
  }

  .filter-state {
    padding: 10px 0;
    &__inner {
      padding: 10px;
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);

    thead {
      width: 100%;

      tr {
        display: flex;
        background: #fff;
        border-radius: 6px 6px 0px 0px;

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

      tr {
        display: flex;
        justify-content: space-between;

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
          padding-left: 20px;
          


          .btns {
            width: 100%;
            display: flex;
            justify-content: center;
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
  }

`
const ModalHeader=styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f6f8;
  padding: 20px 20px 5px 20px;
  h2.title{
    margin-bottom: 0;
    font-size: 25px !important;
  }
    svg{
      height: 20px;
      width: 20px;
      color:#000;
    }
  
  button.closeSvg{
    background: transparent;
    border: none;
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

const ModalFooter=styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
    button{
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 18px;
      color: #FFFFFF;
      background: #1F3C88;
      font-family: "Inter";
      border-radius: 8px;
      border: none;
      padding: 12px 22px;
      display: inline-flex;
      gap: 10px;
      align-items: center;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
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

export{
  ExpensesTableWrapper,
  ModalHeader,
  ModalContent,
  ModalFooter,
  FilterWrapper
}
