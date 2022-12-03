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
    width: 100%;
    text-align: end;
    padding-right: 30px ;
    svg{
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