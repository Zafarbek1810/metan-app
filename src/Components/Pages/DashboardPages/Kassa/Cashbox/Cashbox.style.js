import styled from "styled-components";

const CashboxWrapper=styled.div`
  .top{
    
  }
  .bottom{
    background: #fff;
    padding: 10px;
    .head{
      display: flex;
      justify-content: center;
      
      button{
        margin-left: auto;
        background: transparent;
        border: none;
      }
    }
    .wrapper{
      .col{
        display: flex;
        justify-content: space-between;
        .left{
          display: flex;
          h4{
            font-size: 18px;
            font-weight: 400;
          }
          svg{
            width: 30px;
            height: 30px;
            stroke: #000;
            margin-right: 5px;
          }
        }
        .right{
          p{
            font-size: 16px;
          }
        }
      }
    }
    .table{
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
          padding: 22px 13px;
          th.col{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #1F3C88;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
          }
          th.row{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #1F3C88;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
          }
        }
      }

      tbody{
        background: #fff;
        tr{
          display: flex;
          justify-content: space-between;
          padding: 10px 22px;
          td.col{
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            //display: flex;
            align-items: center;
            justify-content: start;
            color: #000000;
            text-align: center;

            .btns{
              button{
                background: transparent;
                border: none;
                cursor: pointer;
              }
              //width: 40%;
              //display: flex;
              justify-content: space-between;
            }
          }
          td.row{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            //display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
          }
        }
      }
    }
  }
  
`

export { CashboxWrapper }