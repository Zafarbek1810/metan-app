import styled from "styled-components";

const Wrapper=styled.div`
  display: flex;
  background-image: url("/img/nature2.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  .layout__sidebar {
    flex-shrink: 0;
    background: #282A42;
    width: 260px;
    height: 100vh;
    //border-right: 1px solid rgba(31, 60, 136, 0.2);
    overflow-y: auto;
    z-index: 333;
    transition: 0.5s ease;
    transform: translateX(-190px);

    &:hover{
      width: 260px;
      transform: translateX(0);
    }


    &::-webkit-scrollbar-track {
      //-webkit-box-shadow: inset 0 0 6px rgba(187, 187, 187, 0.3);
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 3px;
      background-color: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #57596C!important;
    }
    
  }
  
  //.layout__right{
  //  background-image: url("/img/okean.jpg");
  //  background-attachment: fixed;
  //  background-repeat: no-repeat;
  //  background-size: cover;
  //}

  .layout__top {
    //border-bottom: 1px solid rgba(31, 60, 136, 0.2);
    //position: absolute;
    top: 0;
    left: 60px;
    //width: calc(100% - 60px);
    z-index: 44;
    //background-attachment: fixed;
    //background: transparent;
    //border-bottom: 1px solid rgba(159, 160, 184, 0.3);
  }

  .layout__main {
    //padding-top: 10px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    //padding: 20px 20px 10px;
    
    

    &::-webkit-scrollbar-track {
      //-webkit-box-shadow: inset 0 0 6px rgba(187, 187, 187, 0.3);
      background-color: #c4bebe;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #F5F5F5;
      display: none;
      
    }

    &::-webkit-scrollbar-thumb {
      background-color: #838383;
    }
  }

  .layout__right {
    flex-grow: 1;
    transform: translateX(-100px);
  }
  
  @media(max-width: 992px){
    .layout__sidebar{
      /* display: none; */
    }
    .layout__top{
      left: 0;
      width: 100%;
    }
  }

`

export {Wrapper}