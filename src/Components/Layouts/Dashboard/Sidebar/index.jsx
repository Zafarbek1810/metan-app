import React from 'react';
import {SideBarWrapper} from "./Sidebar.style";
import MyLink from "../../../Common/MyLink";
import {useRouter} from "next/router";

const SidebarItems = [
  {
    title: "Мақола қўшиш",
    path: "/dashboard/table",
    role: ["MODERATOR"]
  },
  {
    title: "Мақолалар Рўйҳати",
    path: "/dashboard/table",
    role: ["MODERATOR"]
  },
  {
    title: "Медиа Ходимлар Рўйхати",
    path: "/dashboard/table",
    role: ["ADMIN"]
  },
  {
    title: "Тиббий Ходимлар Рўйхати",
    path: "/dashboard/table",
    role: ["ADMIN"]
  },
  {
    title: "Барча Мақолалар Рўйхати",
    path: "/dashboard/table",
    role: ["ADMIN"]
  },
  {
    title: "Барча Ҳужжатлар Рўйхати",
    path: "/dashboard/table",
    role: ["ADMIN"]
  },
  {
    title: "Тиббий Ҳужжатлар Яратиш",
    path: "/dashboard/table",
    role: ["EMPLOYEE"]
  },
  {
    title: "Тиббий Ҳужжатлар Тарихи",
    path: "/dashboard/table",
    role: ["EMPLOYEE"]
  },
  {
    title: "Созламалар",
    path: "/dashboard/table",
    role: ["ADMIN"]
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <SideBarWrapper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
            <span>Logo</span>
          </MyLink>

          <div className="links">
            {
              SidebarItems.map(({title, Svg, path}, idx) => {
                return (
                  <MyLink
                    className={router.pathname === path ? "active" : "link"}
                    to={path}
                    key={idx}
                  >
                    {/*<Svg/>*/}
                    {title}
                  </MyLink>
                )
              })
            }

          </div>
        </div>
        <div className="bottom">
          <div className="exit">
            <MyLink className="link" to="#" > Тизимдан чиқиш</MyLink>
          </div>

          <div className="created">
            Created by <MyLink className="crlink" to="https://jdsystems.uz/" target="_blank">JDSystems</MyLink>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default Sidebar;