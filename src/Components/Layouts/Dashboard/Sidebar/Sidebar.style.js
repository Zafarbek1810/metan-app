import styled from "styled-components";

const SideBarWrapper=styled.div`
  padding: 10px 0 0;
  height: 100vh;
  background: #fff;
  

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    margin-bottom: 30px;

    svg {
      height: 40px;
    }

    span {
      text-transform: uppercase;
      margin-left: 10px;
      //width: 50%;
      font-size: 25px;
      font-weight: 600;
    }
    img{
      width: 200px;
    }
  }

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

  .bottom {
    margin-top: auto;
  }

  .exit {
    margin-bottom: 40px;
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



`

export {SideBarWrapper}