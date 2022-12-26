import styled from "styled-components";

const DashHeaderWrapper=styled.div`
  padding: 10px;
  display: flex;
  position: relative;
  justify-content: space-between;
  
  .storeName{
    width: 550px;
    display: flex;
    
    h3{
      color: rgba(0, 0, 0, 0.7);
      font-family: "Inter";
    }
    svg{
      fill: #0d6efd;
      margin-right: 20px;
    }
  }

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
    width: 70%;
    padding-right: 30px ;
    text-decoration: none;
    background: transparent;
    border: none;
    font-family: "Inter";
    h3{
      color: rgba(0, 0, 0, 0.7);
      font-size: 20px;
      margin-bottom: 0;
      font-family: "Rubik";
    }
    svg{
      stroke: rgba(0, 0, 0, 0.7);
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
  
  @media(max-width: 992px){
    .sidebarBtn{
      display: block;
    }
  }
  
`

export{DashHeaderWrapper}