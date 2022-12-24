import styled from "styled-components";

const SidebarWrap=styled.div`
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    svg {
      height: 100px;
      padding: 0 10px;
    }
    img{
      margin-top: 30px;
      height: 40px;
    }
  }

  .sidebar-menu{
    //background-color: #282A42;
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
      margin-bottom: 5px;
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 18px;
      color: #D1D0E7;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      font-family: "Inter";
      transition: 300ms;

      &:hover{
        padding: 10px;
        font-style: normal;
        font-size: 17px;
        line-height: 18px;
        color: #D1D0E7;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: start;
        text-decoration: none;
        background: #373951 !important;
        font-family: "Inter";
      }
      svg {
        fill: none !important;
        stroke: #D1D0E7 !important;
        margin-right: 8px;
        width: 25px;
        height: 25px;
      }
    }
    svg {
      fill: none !important;
      stroke: #D1D0E7 !important;
      margin-right: 8px;
      width: 25px;
      height: 25px;
    }
    .activelink {
      padding: 10px;
      margin-bottom: 5px;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 18px;
      color: #D1D0E7;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      background: #787EFF !important;
      border-radius: 12px;
      font-family: "Inter";

      svg {
        fill: none !important;
        stroke: #D1D0E7 !important;
        margin-right: 8px;
        width: 25px;
        height: 25px;
      }
    }
  }
  .ant-collapse-header{
    .ant-collapse-expand-icon{
        svg {
          fill: #D1D0E7 !important;
          stroke: #D1D0E7 !important;
          margin-right: 8px;
          width: 15px;
          height: 15px;
        }
    }
    .ant-collapse-header-text{
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 18px;
      color: #D1D0E7;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      border-radius: 12px;
      font-family: "Inter";
      
    }
  }
`

export {SidebarWrap}