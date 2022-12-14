import styled from "styled-components";

const LoginPageWrapper=styled.div`
  padding-top: 50px;
  background-image: url("/img/mountain2.jpg");
  background-size: cover;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 50px) !important;
  }

  //.logo{
  //  display: flex;
  //  align-items: center;
  //  text-decoration: none;
  //  color: #000;
  //  svg{
  //    height: 40px; 
  //  }
  //  span{
  //    text-transform: uppercase;
  //    margin-left: 10px;
  //    width: 20%;
  //    font-size: 0.75rem;
  //    font-weight: 600;
  //  }
  //}

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    text-decoration: none;
    
    svg{
      width: 150px;
      height: 150px;
    }

  }

  .main {
    h4 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 38px;
      color: rgba(0, 0, 0, 0.84);
      text-align: center;
    }

    form {
      width: 50%;
      background: transparent;
      padding: 35px 40px;
      border-radius: 24px;
      margin: auto;
      margin-bottom: 50px;
      backdrop-filter: blur(5px);
      border: 1px solid #fff;
      //backdrop-filter: invert(70%);
      //backdrop-filter: sepia(70%);

      display: flex;
      flex-direction: column;
      align-items: center;

      .input {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        label {
          font-style: normal;
          font-family: "Inter";
          font-weight: 600;
          font-size: 20px;
          color: #000;
          //color: #1F3C88;
          margin-bottom: 10px;
          text-align: start;
          width: 100%;
        }

        input {
          width: 100% !important;
          background: #fff !important;
          //background: rgba(31, 60, 136, 0.05);
          border: 2px solid #000;
          //border: 1px solid rgba(31, 60, 136, 0.2);
          border-radius: 24px;
          margin-bottom: 35px;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
          font-family: "Inter";
        }
      }

      .loginBtn {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
        padding: 15px 60px;
        color: #FFFFFF;
        background: #1F3C88;
        border-radius: 6px;
        border: none;
        height: 50px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        &:disabled {
          cursor: not-allowed !important;
        }
      }
    }
  }

  .created {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;

    .crlink {
      color: #fff;
      text-decoration: none;
    }
  }

  @media ( max-width: 992px) {
    form {
      width: 80% !important;
    }
  }
`

export{
  LoginPageWrapper
}