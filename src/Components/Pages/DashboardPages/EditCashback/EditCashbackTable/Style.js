import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Inter";
  
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #D2D3E8;
    margin-bottom: 30px;
    margin-top: 15px;
    font-family: "Inter";
  }

  .content {
    background-color: #30334E;
    border-radius: 12px;
    padding: 20px;
  }

  .input {
    padding: 10px 15px;
    border-radius: 4px;
  }

  .select {
    min-width: 200px;
  }

  .add-btn {
    padding: 12px 15px;
    border-radius: 4px;
    font-weight: 700;
    width: 100%;
    background-color: #6376D2;
    color: #fff;
    border: 0;
  }

  .edit_row {
    td, th {
      color: #D2D3E8;
      width: 20%;
      padding: 10px;
      border-bottom: 1px solid rgba(159, 160, 184, 0.3);
      
    }
    //
    //&:nth-child(even) {
    //  background-color: #f2f2f2;
    //}
  }

  .delete-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border: 1px solid #ff4b4b;
    background-color: transparent;

    svg {
      color: #ff4b4b;
      font-size: 20px;
      height: 20px;
    }

    &:hover {
      background-color: #ff4b4b;

      svg {
        color: #fff;
      }
    }
  }


  /* Chrome, Safari, Edge, Opera */

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export {
  Wrapper
}
