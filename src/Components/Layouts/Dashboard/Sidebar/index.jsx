import React, {useState} from 'react';
import {SideBarWrapper} from "./Sidebar.style";
import MyLink from "../../../Common/MyLink";
import {useRouter} from "next/router";
import HomeSvg from "../../../Common/Svgs/HomeSvg";
import CheckSvg from "../../../Common/Svgs/CheckSvg";
import UsersSvg from "../../../Common/Svgs/UsersSvg";
import CashSvg from "../../../Common/Svgs/CashSvg";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import SettingSvg from "../../../Common/Svgs/SettingSvg";
import ShopSvg from "../../../Common/Svgs/ShopSvg";
import FileSvg from "../../../Common/Svgs/FileSvg";
import CashbackSvg from "../../../Common/Svgs/CashbackSvg";
import AwardSvg from "../../../Common/Svgs/AwardSvg";
import FireSvg from "../../../Common/Svgs/FireSvg";
import ClockSvg from "../../../Common/Svgs/ClockSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


const SidebarItemsMenu = [
  {
    title: "Bosh Sahifa",
    path: "/dashboard/home",
    Svg: HomeSvg,
    role: ["MANAGER"]
  },
  {
    title: "Cheklar",
    path: "/dashboard/cheks",
    Svg: CheckSvg,
    role: ["MANAGER"]
  },
  {
    title: "Mijozlar",
    path: "/dashboard/clients",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Qarzdorlar",
    path: "/dashboard/debtors",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Xarajatlar",
    path: "/dashboard/expenses",
    Svg: CashSvg,
    role: ["MANAGER"]
  },

];

const SidebarItemsSetting = [
  {
    title: "Savdo nuqtalari",
    path: "/dashboard/pos",
    Svg: ShopSvg,
    role: ["MANAGER"]
  },
  {
    title: "Direktor",
    path: "/dashboard/directors",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Hujjatlar",
    path: "/dashboard/documents",
    Svg: FileSvg,
    role: ["MANAGER"]
  },
  {
    title: "Kassirlar",
    path: "/dashboard/cashiers",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Keshbek",
    path: "/dashboard/services",
    Svg: CashbackSvg,
    role: ["MANAGER"]
  },
  {
    title: "Aksiya",
    path: "/dashboard/prize",
    Svg: AwardSvg,
    role: ["MANAGER"]
  },
  {
    title: "Kolonkalar",
    path: "/dashboard/gas-columns",
    Svg: FireSvg,
    role: ["MANAGER"]
  },
  {
    title: "Kolonkalar hisoboti",
    path: "/dashboard/gas-columns-report",
    Svg: FireSvg,
    role: ["MANAGER"]
  },
  {
    title: "Smena",
    path: "/dashboard/shifts",
    Svg: ClockSvg,
    role: ["MANAGER"]
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


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SideBarWrapper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
            <span>Logo</span>
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
                SidebarItemsMenu.map(({title, Svg, path}, idx) => {
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
            <TabPanel value={value} index={1}>
              {
                SidebarItemsSetting.map(({title, Svg, path}, idx) => {
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


