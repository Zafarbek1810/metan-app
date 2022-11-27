import styled from "styled-components";

const SideBarWrapper=styled.div`
  padding: 20px;
  height: 100%;
  font-family: "Montserrat" !important;

  .logo{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;

    svg{
      height: 40px;
    }
    span{
      text-transform: uppercase;
      margin-left: 10px;
      //width: 50%;
      font-size: 0.5rem;
      font-weight: 600;
    }
  }

  .links{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }

  .wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-between !important;
  }

  .bottom {
    margin-top: auto;
  }

  .exit{
    margin-bottom: 40px;
  }

  .created{
    font-style: normal;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
    text-align: end;

    .crlink{
      color: #1f3c88;
      text-decoration: none;
    }
  }

  .link{
    margin: 20px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    user-select: none;
  }

  svg{
    fill: #000 !important;
    margin-right: 8px;
  }

  .active{
    margin: 20px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 18px;
    color: #1F3C88;
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    svg{
      fill: #1F3C88 !important;
      margin-right: 8px;
    }
  }

`

export {SideBarWrapper}