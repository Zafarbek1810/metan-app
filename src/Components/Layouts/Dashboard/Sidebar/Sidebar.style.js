import styled from "styled-components";

const SideBarWrapper=styled.div`
  padding: 20px 0 0;
  height: 100%;
  font-family: "Montserrat" !important;
  
  .nav{
    border-bottom: 1px solid #ced4da;
  }
  .nav-item{
    display: flex;  
    
    .nav-link{
      font-weight: 600;
      font-size: 20px;
      line-height: 18px;
      color: #1F3C88;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      background: none;
      border: 1px solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      margin-bottom: -1px;
    }
    .active{
      font-weight: 600;
      font-size: 20px;
      line-height: 18px;
      color: #1F3C88;
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      background-color: #fff;
      border-color: #ced4da #ced4da #fff;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      margin-bottom: -1px;
    }
    
    
    svg{
      width: 20px !important;
      height: 20px !important;
    }
  }
  
  .tab-content{
    .tab-pane, .active{
      background: #fff;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    margin-bottom: 50px;

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
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
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

    .crlink {
      color: #1f3c88;
      text-decoration: none;
    }
  }

  .link {
    padding: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    color: #1F3C88;
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
  }

  svg {
    fill: none !important;
    stroke: #1F3C88 !important;
    margin-right: 8px;
    width: 30px;
    height: 30px;
  }

  .active {
    padding: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color: #1F3C88;
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    background: rgba(31, 60, 136, 0.15);

    svg {
      fill: none !important;
      stroke: #1F3C88 !important;
      margin-right: 8px;
      width: 30px;
      height: 30px;
    }
  }



`

export {SideBarWrapper}