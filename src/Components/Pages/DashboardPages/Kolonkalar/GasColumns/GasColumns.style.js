import styled from "styled-components";

const GasColumnsWrapper=styled.div`
  font-family: "Inter";
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
      color: #D2D3E8;
      font-family: "Rubik";
    }
    
    .modal-wrapper{
      font-family: "Inter";
      .modal-body{
        .input, .select{
          margin-bottom: 20px;
          label{
            font-size: 15px;
            span{
              color: red;
            }
          }
        }
      }
      .modal-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        .btn{
          width: 45%;
          font-weight: 600;
        }
      }
    }
  }

  .filter {
    background-color: #30334E;
    border-radius: 4px;
    padding: 10px;
  }

  .filter-state {
    padding: 10px 0;
    &__inner {
      padding: 10px;
      border-radius: 15px;
      background-color: #30334E;

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
        background: rgb(58,62,91);
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;
        
        th.col{
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #D4D4EA;
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
      background: #30334E;
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
          color: #9FA0B8;
          text-align: start;
          font-family: "Inter";
          padding-left: 20px;
          
        }

        img{
          width: 50px;
          height: 50px;
        }

        .btns {
          width: 60%;
          display: flex;
          justify-content: start;

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

export{GasColumnsWrapper}