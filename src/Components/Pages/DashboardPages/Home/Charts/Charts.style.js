import styled from "styled-components";

const ChartsWrapper=styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
  h4{
    font-size: 20px;
    font-weight: 500;
  }
  .wrap{
    display: flex;
    & > div{
      margin-right: 20px;
      p{
        font-size: 16px;
        margin-bottom: 0;
      }
      span{
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

export{
  ChartsWrapper
}