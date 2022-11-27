import React from 'react';
import {HeaderWrapper} from "./Header.style";
import Container from "../../Common/Container";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";

const Header = () => {

  return (
    <HeaderWrapper>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop:'35px'
        }}
      >
        <MyLink className="logo" to="/">
          <span>LOGO</span>
        </MyLink>
        <Burger />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;