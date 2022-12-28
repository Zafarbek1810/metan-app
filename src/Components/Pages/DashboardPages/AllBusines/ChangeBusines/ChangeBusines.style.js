import styled from "styled-components";

const ChangeBusinesWrapper=styled.div`
height: 50vh;
  
  .wrap{
    width: 70%;
    height: 100%;
    margin:auto;
    h3{
      color: #fff;
      text-shadow: 0px 0px 8px #000000;
      text-align: center;
      margin-bottom: 20px;
      
    }
    .selects{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .selec{
        width: 90%;
      }
    }
  }
`

const FilterWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: "Inter";
  
  .filter-content {
    position: absolute;
    top: calc(100% + 4px);
    left: -80px;

    min-width: 400px;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

export{ChangeBusinesWrapper,FilterWrapper}