import styled from "styled-components";

const EditTableWrapper = styled.div`
  form {
    background: #fff;
    padding: 20px;
    font-family: "Inter";

  }
  .keshbekTitle{
    font-size: 20px;
    font-family: "Inter";
    color: rgba(0, 0, 0, 0.7);

  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    font-family: "Inter";
    
    span{
      color: rgba(0, 0, 0, 0.7);
    }


    button{
      &:disabled {
        cursor: not-allowed !important;
        opacity: 0.8;
      }
    }

    label {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      margin-bottom: 25px;


      input {
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.7) !important;
        border: 2px solid rgba(31, 60, 136, 0.4);
        border-radius: 6px;
        padding: 10px 10px;
        font-family: "Inter";

      }
      
      .ant-select-selector{
        color: rgba(0, 0, 0, 0.7) !important;
        background-color: #fff;
      }
      
      textarea{
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.7);
        min-height: 100px;
      }
    }
  }

  

  .box {
    border: 1px solid #0d6efd;
    min-height: 300px;
    border-radius: 6px;
    style={{fontFamily:"Inter"}}

    table {
      width: 100%;
      font-family: "Inter";


      tbody {
        tr {
          padding: 8px;
          display: flex;
          justify-content: space-between;

          td {
            color: rgba(0, 0, 0, 0.7);
            button {
              background: transparent;
              border: none;
            }
          }
        }
      }
    }
  }

  .btns {
    display: flex;
    gap: 30px;
    justify-content: end;

  }
`

export { EditTableWrapper }