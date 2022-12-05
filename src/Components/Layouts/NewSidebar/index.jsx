import React from 'react';
import {NewSidebarWrapper} from "./NewSidebar.style";
import MyLink from "../../Common/MyLink";
import {useRouter} from "next/router"
import HomeSvg from "../../Common/Svgs/HomeSvg";
import CheckSvg from "../../Common/Svgs/CheckSvg";
import UsersSvg from "../../Common/Svgs/UsersSvg";
import CashSvg from "../../Common/Svgs/CashSvg";
import ShopSvg from "../../Common/Svgs/ShopSvg";
import CashbackSvg from "../../Common/Svgs/CashbackSvg";
import FireSvg from "../../Common/Svgs/FireSvg";
import ClockSvg from "../../Common/Svgs/ClockSvg";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../Context/UserContext";

const SidebarItemsMenu = [
  {
    title: "Bosh Sahifa",
    path: "/dashboard/home",
    Svg: HomeSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Cheklar",
    path: "/dashboard/cheks",
    Svg: CheckSvg,
    role: ["CASHIER", "SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Mijozlar",
    path: "/dashboard/clients",
    Svg: UsersSvg,
    role: ["CASHIER", "SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Qarzdorlar",
    path: "/dashboard/debtors",
    Svg: UsersSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Xarajatlar",
    path: "/dashboard/expenses",
    Svg: CashSvg,
    role: ["CASHIER", "SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Savdo nuqtalari",
    path: "/dashboard/pos",
    Svg: ShopSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Direktor",
    path: "/dashboard/directors",
    Svg: UsersSvg,
    role: ["SUPER_ADMIN"]
  },
  // {
  //   title: "Hujjatlar",
  //   path: "/dashboard/documents",
  //   Svg: FileSvg,
  //   role: ["SUPER_ADMIN", "DIRECTOR"]
  // },
  {
    title: "Kassirlar",
    path: "/dashboard/cashiers",
    Svg: UsersSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Keshbek",
    path: "/dashboard/services",
    Svg: CashbackSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Kolonkalar",
    path: "/dashboard/gas-columns",
    Svg: FireSvg,
    role: ["CASHIER", "SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Kolonkalar hisoboti",
    path: "/dashboard/gas-columns-report",
    Svg: FireSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
  {
    title: "Smena",
    path: "/dashboard/shifts",
    Svg: ClockSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },

];

const NewSidebar = () => {
  const router = useRouter();
  const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);
  const NavList = SidebarItemsMenu.filter(({role}) => role.includes(userRole));




  return (
    <NewSidebarWrapper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
              <span>LOGO</span>
          </MyLink>

          <div className="links">
            {
              NavList.map(({title, Svg, path}, idx) => {
                return (
                  <MyLink
                    className={router.pathname === path ? "activelink" : "link"}
                    to={path}
                    key={idx}
                  >
                    <Svg/>
                    {title}
                  </MyLink>
                )
              })
            }
          </div>
        </div>
        <div className="bottom">
          <div className="created">
            Created by <MyLink className="crlink" to="https://jdsystems.uz/" target="_blank">JDSystems</MyLink>
          </div>
        </div>
      </div>
    </NewSidebarWrapper>
  );
};

export default NewSidebar;