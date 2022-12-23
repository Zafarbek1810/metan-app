import styled from "styled-components";

const SideBarWrapper=styled.div`
  padding: 10px 0 0;
  height: 100vh !important;
  background: #fff;
  
  .wrapper{
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    svg {
      height: 100px;
      padding: 0 10px; 
    }
  }
  
  .tabBottom{
    .links {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    .wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between !important;
    }
    .link {
      padding: 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #1F3C88;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      font-family: "Inter";
      svg {
        fill: none !important;
        stroke: #1F3C88 !important;
        margin-right: 8px;
        width: 25px;
        height: 25px;
      }
    }
    svg {
      fill: none !important;
      stroke: #1F3C88 !important;
      margin-right: 8px;
      width: 25px;
      height: 25px;
    }
    .activelink {
      padding: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      color: #1F3C88;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      background: rgba(31, 60, 136, 0.15) !important;
      font-family: "Inter";

      svg {
        fill: none !important;
        stroke: #1F3C88 !important;
        margin-right: 8px;
        width: 25px;
        height: 25px;
      }
    }
    
    
  }

  .bottom {
    margin-top: auto;
  }
  
  .created {
    font-style: normal;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
    text-align: end;
    margin-right: 10px;

    .crlink {
      color: #1f3c88;
      text-decoration: none;
    }
  }

`

export {SideBarWrapper}