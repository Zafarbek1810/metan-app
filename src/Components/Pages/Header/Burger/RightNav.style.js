import styled from "styled-components";

const RightNavWrapper = styled.div`
  list-style: none;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;

  ul {
    display: flex;
    width: 100%;
    padding-left: 30px;
    justify-content: space-between;
  }

  li {
    padding: 10px 0 10px 20px;
    width: auto;

    .active {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 20px;
      color: #000000;
      text-decoration: none;
      list-style: none;
    }

    .link {
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 20px;
      color: #000000;
      text-decoration: none;
      list-style: none;
      cursor: pointer;
    }

    .login {
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 20px;
      color: rgba(0, 0, 255, 0.55);
      text-decoration: none;
      list-style: none;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 350px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    justify-content: start;

    ul {
      display: flex;
      flex-direction: column;
      text-align: end;
    }

    li {
      color: #000 !important;

      .link {
        color: #000 !important;
        font-size: 1rem;
        font-weight: 400;
      }

      svg {
        fill: #000;
      }

      .bottom {
        padding: 10px;

        .link {
          color: #000 !important;
        }
      }

      .active {
        color: #000;
        font-weight: 600;
      }
    }

    .btn {
      display: none;
    }
  }
`;

export {RightNavWrapper};
