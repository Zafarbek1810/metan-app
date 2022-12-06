import styled from "styled-components";

const EditTableWrapper = styled.div`
  form {
    background: #fff;
    padding: 20px 10px;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    label {
      width: 80%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .btn {
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