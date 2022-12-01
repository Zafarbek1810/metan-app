import React from 'react';
import {DashHeaderWrapper} from "./DashboardHeader.style";
import MyLink from "../../../Common/MyLink";
import LogOutSvg from "../../../Common/Svgs/LogOutSvg";

const DashboardHeader = () => {
  return (
    <DashHeaderWrapper>
      <div className="admin">
        Admin <LogOutSvg/>
      </div>
    </DashHeaderWrapper>
  );
};

export default DashboardHeader;