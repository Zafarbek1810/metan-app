import styled from "styled-components";

const ChartsWrapper=styled.div`
  background: #30334E;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
  border-radius: 24px;
  
  .apexcharts-text tspan{
    font-size: 16px;
    color: #fff;
    z-index: 3;
    font-family: "Inter";
    font-weight: 600;
  }
  
  h4{
    font-size: 20px;
    font-weight: 500;
    color: #D2D3E8;
    font-family: "Rubik";
  }
  .wrap{
    margin-top: 20px;
    display: flex;
    & > div{
      margin-right: 20px;
      p{
        font-family: "Rubik";
        font-size: 16px;
        color: #D2D3E8;
        margin-bottom: 0;
      }
      span{
        font-family: "Rubik";
        font-size: 20px;        
      }
      .first{
        color: rgb(114, 225, 40);
      }
      .second{
        color: rgb(253, 181, 40);
      }
      .third{
        color: rgb(38, 198, 249);
      }

    }
    
  }
`

export{
  ChartsWrapper
}