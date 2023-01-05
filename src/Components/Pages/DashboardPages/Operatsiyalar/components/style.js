import styled from "styled-components";

const WRAPPER = styled.div`
  .MuiPaper-root {
    width: 500px !important;
  }

  .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
    width: 50%;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.7);
    font-family: "Rubik";
  }


  .inOutDrawer {
    padding: 20px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
  }

  .filter-content {
    width: 100%;
  }


  .statistika-wrap {
    width: 100%;
    margin-left: auto;
    margin-bottom: 20px;

    .card {
      border-radius: 12px;
      background-color: #fff;
      padding: 15px;
      box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;

      h5 {
        color: rgba(0, 0, 0, 0.7);
        font-family: "Rubik";
        margin-bottom: 13px;
      }

      .wrapper {
        display: flex;
        justify-content: space-between;

        .uzs-statistika {
          width: 49%;
          display: flex;
          justify-content: space-between;
          border-right: 1px solid #555;
        }

        .usd-statistika {
          width: 49%;
          display: flex;
          justify-content: space-between;
          
        }

        .left {
          width: 30%;
          display: flex;

          .icon {
            background: rgb(255, 77, 73, 0.12);
            border-radius: 12px;
            padding: 10px;

            svg {
              width: 30px;
              height: 30px;
            }
          }

          .bot {
            margin-left: 15px;
            display: flex;
            flex-direction: column;

            p {
              color: rgba(0, 0, 0, 0.7);
              margin-bottom: 0;
            }

            span {
              font-weight: 700;
              font-size: 17px;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }

        .right {
          width: 30%;
          display: flex;

          .icon {
            background: rgb(253, 181, 40, 0.12);
            border-radius: 12px;
            padding: 10px;

            svg {
              width: 30px;
              height: 30px;
              stroke: rgb(102, 108, 255);
            }
          }

          .bot {
            margin-left: 15px;
            display: flex;
            flex-direction: column;

            p {
              color: rgba(0, 0, 0, 0.7);
              margin-bottom: 0;
            }

            span {
              font-weight: 700;
              font-size: 17px;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }

        .right2 {
          width: 30%;
          display: flex;

          .icon {
            background: rgb(114, 225, 40, 0.12);
            border-radius: 12px;
            padding: 10px;

            svg {
              width: 30px;
              height: 30px;
              stroke: rgb(102, 108, 255);
            }
          }

          .bot {
            margin-left: 15px;
            display: flex;
            flex-direction: column;

            p {
              color: rgba(0, 0, 0, 0.7);
              margin-bottom: 0;
            }

            span {
              font-weight: 700;
              font-size: 17px;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }

    }
  }
`

export {
  WRAPPER
}
