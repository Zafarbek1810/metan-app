import styled from "styled-components";

const GasColumnsWrapper=styled.div`
  .top{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
    }
    .modal-wrapper{
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
          font-size: 0.875rem;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        th.row{
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
          font-size: 0.8125rem;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          text-align: center;

          img{
            width: 50px;
            height: 50px;
          }

          .btns{
            button{
              background: transparent;
              border: none;
              cursor: pointer;
            }
            width: 40%;
            display: flex;
            justify-content: center;
          }
        }
        td.row{
          font-style: normal;
          font-weight: 600;
          font-size: 0.8125rem;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
`

export{GasColumnsWrapper}