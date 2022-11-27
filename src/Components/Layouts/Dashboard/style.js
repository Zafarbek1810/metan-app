import styled from "styled-components";

const Wrapper=styled.div`
  display: flex;
  font-family: "Montserrat" !important;


  .layout__sidebar {
    flex-shrink: 0;
    width: 260px;
    border-right: 1px solid rgba(31, 60, 136, 0.2);
  }

  .layout__top {
    border-bottom: 1px solid rgba(31, 60, 136, 0.2);
    position: absolute;
    top: 0;
    left: 260px;
    width: calc(100% - 250px);
  }

  .layout__main {
    margin-top: 100px;
    height: calc(100vh - 100px);
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      //-webkit-box-shadow: inset 0 0 6px rgba(187, 187, 187, 0.3);
      background-color: #c4bebe;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #838383;
    }
  }

  .layout__right {
    flex-grow: 1;
  }
`

export {Wrapper}