import React, {useState} from 'react';
import {DashHeaderWrapper} from "./DashboardHeader.style";
import LogOutSvg from "../../../Common/Svgs/LogOutSvg";
import MenuSvg from "../../../Common/Svgs/MenuSvg";
import {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../Context/UserContext";
import MyLink from "../../../Common/MyLink";

const DashboardHeader = ({title, RefObj, setIsOpen}) => {
  const router = useRouter();
  // const userName = useContextSelector(UserContext, ctx => ctx.state.user.type);
  const logoutContext = useContextSelector(UserContext, ctx => ctx.actions.logout);

  const handleLogout = () => {
    RefObj.current.textContent = `Haqiqatan ham tizimdan chiqmoqchimisiz?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(() => {
        logoutContext();
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <DashHeaderWrapper>
      <button className="sidebarBtn">
        <MenuSvg className="menuSvg"/>
      </button>
      <div className="sidebarMenu" style={{display: "none"}}>
        cc
      </div>
      <MyLink to="#" onClick={handleLogout} className="admin">
        <p>Admin</p> <LogOutSvg/>
      </MyLink>
    </DashHeaderWrapper>
  );
};

export default DashboardHeader;