import React, {useEffect, useState} from 'react';
import {DashHeaderWrapper} from "./DashboardHeader.style";
import LogOutSvg from "../../../Common/Svgs/LogOutSvg";
import MenuSvg from "../../../Common/Svgs/MenuSvg";
import {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../Context/UserContext";
import MyLink from "../../../Common/MyLink";
import UserProvider from "../../../../Data/Providers/UserProvider";
import Message from "../../../../utils/Message";
import {Store} from "@mui/icons-material";
import StoreSvg from "../../../Common/Svgs/StoreSvg";

const DashboardHeader = ({title, RefObj, setIsOpen}) => {
  const router = useRouter();
  // const userName = useContextSelector(UserContext, ctx => ctx.state.user);
  const logoutContext = useContextSelector(UserContext, ctx => ctx.actions.logout);
  const [user, setUser] = useState([])


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

  useEffect(() => {
    UserProvider.getMe()
      .then(res => {
        console.log("getme", res)
        setUser(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })

  }, [])

  return (
    <DashHeaderWrapper>
      <button className="sidebarBtn">
        <MenuSvg className="menuSvg"/>
      </button>
      <div className="sidebarMenu" style={{display: "none"}}>
        cc
      </div>
      <h3 className="storeName"><StoreSvg/>{user?.outletAsCashier?.title}</h3>
      <h3 className="storeName">{user?.outletAsDirector?.title}</h3>
      <MyLink to="#" onClick={handleLogout} className="admin">
        <h3>{user.fullName} </h3> <LogOutSvg/>
      </MyLink>
    </DashHeaderWrapper>
  );
};

export default DashboardHeader;