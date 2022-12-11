import styled from "styled-components";

const CardsWrapper = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
      width: 30%;
    }
    
    .filter{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
    }
  }
  
  .cards{
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    & > div{
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      width: 32%;
      margin-bottom: 20px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
      .left{
        background: #1F3C88;
        border-radius: 50%;
        padding: 10px;
        svg{
          width: 30px;
          height: 30px;
          stroke: #fff;
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        align-items: end;
        span{
          font-size: 21px;
          font-weight: 700;
          color: #495057;
        }
        p{
          font-size: 15px;
          color: #74788d;
        }
      }
    }
  }

  @media(max-width: 992px){
    .top{
      display: flex;
      flex-direction: column;
      align-items: center;
      .filter{
        width: 100%;
      }
    }
    
    .cards{
      & > div{
        width: 48%;
      }
    }
  }
  
  @media(max-width: 690px){
    .cards{
      & > div{
        width: 100%;
      }
    }
  }

`


export {CardsWrapper}