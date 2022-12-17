import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SideBarWrapper} from "./Sidebar.style";
import MyLink from "../../../Common/MyLink";
import {useRouter} from "next/router";
import HomeSvg from "../../../Common/Svgs/HomeSvg";
import CheckSvg from "../../../Common/Svgs/CheckSvg";
import UsersSvg from "../../../Common/Svgs/UsersSvg";
import CashSvg from "../../../Common/Svgs/CashSvg";
import SettingSvg from "../../../Common/Svgs/SettingSvg";
import ShopSvg from "../../../Common/Svgs/ShopSvg";
import FileSvg from "../../../Common/Svgs/FileSvg";
import CashbackSvg from "../../../Common/Svgs/CashbackSvg";
import FireSvg from "../../../Common/Svgs/FireSvg";
import ClockSvg from "../../../Common/Svgs/ClockSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserContext from "../../../../Context/UserContext";
import {useContextSelector} from "use-context-selector";


const SidebarItemsMenu = [
  {
    title: "Kassa",
    path: "/dashboard/cashbox",
    Svg: HomeSvg,
    role: ["CASHIER"]
  },
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
  // {
  //   title: "Kolonkalar",
  //   path: "/dashboard/gas-columns",
  //   Svg: FireSvg,
  //   role: ["CASHIER"]
  // },
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

];

const SidebarItemsSetting = [
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
  {
    title: "Hujjatlar",
    path: "/dashboard/documents",
    Svg: FileSvg,
    role: ["SUPER_ADMIN", "DIRECTOR"]
  },
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
    role: ["SUPER_ADMIN", "DIRECTOR", "CASHIER"]
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

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 1}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);
  const SidebarLinks= SidebarItemsMenu.concat(SidebarItemsSetting)


  const NavListMenu = SidebarItemsMenu.filter(({role}) => role.includes(userRole));
  const NavListSetting = SidebarItemsSetting.filter(({role}) => role.includes(userRole));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useLayoutEffect(() => {
    for (const {path} of SidebarItemsSetting) {
      if (router.pathname === path) {
        setValue(1)
      }
    }
  }, [])


  return (
    <SideBarWrapper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
            <img src="/img/logo.jpeg" alt=""/>
          </MyLink>

          <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Menu" {...a11yProps(0)}  />
                <Tab label={<SettingSvg/>} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {
                NavListMenu.map(({title, Svg, path}, idx) => {
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
            </TabPanel>
            <TabPanel value={value} index={1} >
              {
                NavListSetting.map(({title, Svg, path}, idx) => {
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
            </TabPanel>
          </Box>
        </div>
        <div className="bottom">
          {/*<div className="exit">*/}
          {/*  <MyLink className="link" to="#" > Тизимдан чиқиш</MyLink>*/}
          {/*</div>*/}

          <div className="created">
            Created by <MyLink className="crlink" to="https://jdsystems.uz/" target="_blank">JDSystems</MyLink>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default Sidebar;


