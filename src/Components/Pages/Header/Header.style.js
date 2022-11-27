import styled from "styled-components";

const HeaderWrapper = styled.div`
  .logo {
    width: 25%;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;

    span {
      text-transform: uppercase;
      margin-left: 10px;
      width: 80%;
      font-size: 30px;
      line-height: 18px;
      font-family: "Montserrat";
      letter-spacing: 0.5px;
      font-weight: 600;
      margin-right: -50px;
    }
  }

  a, .link, .active, li {
    text-decoration: none !important;
    list-style: none !important;
  }

  @media (max-width: 992px) {
    width: 100%;
    //position: fixed;
    z-index: 25;


  }

  @media (max-width: 700px) {
    .logo {
      width: 80%;

      span {
        width: 100% !important;
        font-size: 30px;
      }
    }
  }
`

export {
  HeaderWrapper
}