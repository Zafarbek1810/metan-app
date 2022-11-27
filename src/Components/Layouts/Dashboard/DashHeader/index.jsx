import React from 'react';
import {DashHeaderWrapper} from "./DashboardHeader.style";
import MyLink from "../../../Common/MyLink";

const DashboardHeader = () => {
  return (
    <DashHeaderWrapper>
      <MyLink to="/" className="logo">
        LOGO
      </MyLink>
      dash header
    </DashHeaderWrapper>
  );
};

export default DashboardHeader;