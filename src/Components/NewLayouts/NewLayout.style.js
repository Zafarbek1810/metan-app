import styled from "styled-components";

const NewLayoutWrapper=styled.div`
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 150px  ;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
  }

  svg {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

`

export {NewLayoutWrapper}