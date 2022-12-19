import styled from "styled-components";

const StatisticWrapper=styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
  border-radius: 24px;
  margin-top: 30px;

  .apexcharts-text tspan{
    font-size: 16px;
    font-family: "Inter";
    font-weight: 600;
  }

  h4{
    font-size: 20px;
    font-weight: 500;
    font-family: "Inter";
  }
  .wrap{
    display: flex;
    & > div{
      margin-right: 20px;
      p{
        font-family: "Inter";
        font-size: 16px;
        margin-bottom: 0;
      }
      span{
        font-family: "Inter";
        font-size: 20px;
      }
      .first{
        color: green;
      }
      .second{
        color: orange;
      }
      .third{
        color: #1F3C88;
      }

    }

  }
`

export {StatisticWrapper}