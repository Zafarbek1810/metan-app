import React, {useState} from 'react';
import {SideBarWrapper} from "./Sidebar.style";
import MyLink from "../../../Common/MyLink";
import {useRouter} from "next/router";
import HomeSvg from "../../../Common/Svgs/HomeSvg";
import CheckSvg from "../../../Common/Svgs/CheckSvg";
import UsersSvg from "../../../Common/Svgs/UsersSvg";
import CashSvg from "../../../Common/Svgs/CashSvg";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SettingSvg from "../../../Common/Svgs/SettingSvg";
import ShopSvg from "../../../Common/Svgs/ShopSvg";
import FileSvg from "../../../Common/Svgs/FileSvg";
import CashbackSvg from "../../../Common/Svgs/CashbackSvg";
import AwardSvg from "../../../Common/Svgs/AwardSvg";
import FireSvg from "../../../Common/Svgs/FireSvg";
import ClockSvg from "../../../Common/Svgs/ClockSvg";


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
    path: "/dashboard/2",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Qarzdorlar",
    path: "/dashboard/3",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Xarajatlar",
    path: "/dashboard/4",
    Svg: CashSvg,
    role: ["MANAGER"]
  },

];

const SidebarItemsSetting = [
  {
    title: "Savdo nuqtalari",
    path: "/dashboard/home",
    Svg: ShopSvg,
    role: ["MANAGER"]
  },
  {
    title: "Direktor",
    path: "/dashboard/1",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Hujjatlar",
    path: "/dashboard/2",
    Svg: FileSvg,
    role: ["MANAGER"]
  },
  {
    title: "Kassirlar",
    path: "/dashboard/3",
    Svg: UsersSvg,
    role: ["MANAGER"]
  },
  {
    title: "Keshbek",
    path: "/dashboard/4",
    Svg: CashbackSvg,
    role: ["MANAGER"]
  },
{
    title: "Aksiya",
    path: "/dashboard/4",
    Svg: AwardSvg,
    role: ["MANAGER"]
  },
{
    title: "Kolonkalar",
    path: "/dashboard/4",
    Svg: FireSvg,
    role: ["MANAGER"]
  },
{
    title: "Kolonkalar hisoboti",
    path: "/dashboard/4",
    Svg: FireSvg,
    role: ["MANAGER"]
  },
  {
    title: "Smena",
    path: "/dashboard/4",
    Svg: ClockSvg,
    role: ["MANAGER"]
  },

];

const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


  return (
    <SideBarWrapper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
            <span>Logo</span>
          </MyLink>

          <Nav>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                <SettingSvg/>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12" className="links">
                  {
                    SidebarItemsMenu.map(({title, Svg, path}, idx) => {
                      return (
                        <MyLink
                          className={router.pathname === path ? "active" : "link"}
                          to={path}
                          key={idx}
                        >
                          <Svg/>
                          {title}
                        </MyLink>
                      )
                    })
                  }
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12" className="links">
                  {
                    SidebarItemsSetting.map(({title, Svg, path}, idx) => {
                      return (
                        <MyLink
                          className={router.pathname === path ? "active" : "link"}
                          to={path}
                          key={idx}
                        >
                          <Svg/>
                          {title}
                        </MyLink>
                      )
                    })
                  }
                </Col>
              </Row>
            </TabPane>
          </TabContent>

          {/*<div className="links">*/}


          {/*</div>*/}
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


