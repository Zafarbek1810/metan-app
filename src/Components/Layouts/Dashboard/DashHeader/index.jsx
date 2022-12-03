import React, {useState} from 'react';
import {DashHeaderWrapper} from "./DashboardHeader.style";
import MyLink from "../../../Common/MyLink";
import LogOutSvg from "../../../Common/Svgs/LogOutSvg";
import MenuSvg from "../../../Common/Svgs/MenuSvg";

const DashboardHeader = () => {
  const [show, setShow] = useState(true)

  const handleClick=()=>{
    document.getElementsByClassName("sidebarMenu")
  }

  return (
    <DashHeaderWrapper>
      <button className="sidebarBtn">
        <MenuSvg className="menuSvg"/>
      </button>
      <div className="sidebarMenu" style={{display: "none"}}>
          cc
      </div>
      <div className="admin">
        Admin <LogOutSvg/>
      </div>
    </DashHeaderWrapper>
  );
};

export default DashboardHeader;