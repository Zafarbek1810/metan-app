import styled from "styled-components";

const DashHeaderWrapper=styled.div`
  padding: 10px;
  display: flex;
  position: relative;

  .sidebarBtn{
    display: none;
    background: transparent;
    border: none;
  }
  .sidebarMenu{
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 0;
    top: 60px;
  }
  
  .admin{
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    padding-right: 30px ;
    text-decoration: none;
    p{
      margin-bottom: 0;
      color: #000;
    }
    svg{
      margin-left: 10px;
      width: 30px;
      height: 30px;
    }
  }
  
  @media(max-width: 992px){
    .sidebarBtn{
      display: block;
    }
  }
  
`

export{DashHeaderWrapper}