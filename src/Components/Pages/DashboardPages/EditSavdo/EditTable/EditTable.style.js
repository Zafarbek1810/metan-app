import styled from "styled-components";

const EditTableWrapper = styled.div`
  form {
    background: #fff;
    padding: 20px;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

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
        color: #000000;
        border: 2px solid rgba(31, 60, 136, 0.4);
        border-radius: 6px;
        padding: 10px 10px;
      }
    }
  }

  

  .box {
    border: 1px solid #0d6efd;
    min-height: 300px;
    border-radius: 6px;

    table {
      width: 100%;

      tbody {
        tr {
          padding: 8px;
          display: flex;
          justify-content: space-between;

          td {
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

export {EditTableWrapper}