import styled from "styled-components";

const ChekTableWrapper = styled.div`
  //padding: 40px 30px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #1F3C88;
    font-family: "Inter";
  }

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);

    thead {
      width: 100%;

      tr {
        display: flex;
        background: #fff;
        padding: 15px 22px;
        border-radius: 6px 6px 0px 0px;

        th.col {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Inter";

        }

        th.row {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          justify-content: start;
          text-align: center;
          font-family: "Inter";

        }
      }
    }

    tbody {
      background: #fff;

      tr {
        display: flex;
        justify-content: space-between;
        padding: 0px 22px;

        td.col {
          font-size: 18px;
          line-height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.7);
          //text-align: center;
          font-family: "Inter";

          .link:hover {
            text-decoration: underline !important;
          }
        }

        &:nth-child(even) {
          background-color: #f2f2f2;
        }


        td.row {
          font-size: 18px;
          line-height: 18px;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
        }
      }
    }
  }
`

export {ChekTableWrapper}