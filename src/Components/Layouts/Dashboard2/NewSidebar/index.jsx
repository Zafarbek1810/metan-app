import React, {useState} from 'react';
import {Layout, Menu, theme} from 'antd';
import {useContextSelector} from "use-context-selector";
import {SettingOutlined} from '@ant-design/icons';
import {Collapse, Select} from 'antd';
import UserContext from "../../../../Context/UserContext";
import CheckSvg from "../../../Common/Svgs/CheckSvg";
import MyLink from "../../../Common/MyLink";
import LogoSvg from "../../../Common/Svgs/LogoSvg";
import {SidebarWrap} from "./StyleWrapper";
import {useRouter} from "next/router";
import HomeSvg from "../../../Common/Svgs/HomeSvg";
import UsersSvg from "../../../Common/Svgs/UsersSvg";
import CashSvg from "../../../Common/Svgs/CashSvg";
import ShopSvg from "../../../Common/Svgs/ShopSvg";
import CashbackSvg from "../../../Common/Svgs/CashbackSvg";
import FireSvg from "../../../Common/Svgs/FireSvg";
import ClockSvg from "../../../Common/Svgs/ClockSvg";
import PlanSvg from "../../../Common/Svgs/PlanSvg";
import DashboardSvg from "../../../Common/Svgs/DashboardSvg";
import ChartTreeSvg from "../../../Common/Svgs/ChartTreeSvg";
import ChartLineUp from "../../../Common/Svgs/ChartLineUp";
import FileSvg from "../../../Common/Svgs/FileSvg";

const {Panel} = Collapse;
const {Option} = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SidebarItemsMenu1 = [
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
const SidebarItemsMenu2 = [
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
        title: "Hujjatlar",
        path: "/dashboard/documents",
        Svg: FileSvg,
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

const Umumiy = [
    {
        title: "Panel",
        path: "/dashboard/allBusines",
        Svg: DashboardSvg,
        role: ["SUPER_ADMIN"]
    },
    {
        title: "Rejalar",
        path: "/dashboard/plans",
        Svg: PlanSvg,
        role: ["SUPER_ADMIN", "DIRECTOR"]
    },
    {
        title: "Proyektlar",
        path: "/dashboard/projects",
        Svg: ChartTreeSvg,
        role: ["SUPER_ADMIN"]
    },
    {
        title: "Operatsiyalar",
        path: "/dashboard/operation",
        Svg: ChartLineUp,
        role: ["SUPER_ADMIN", "OPERATOR"]
    },
    {
        title: "Kontragent",
        path: "/dashboard/counterParty",
        Svg: UsersSvg,
        role: ["SUPER_ADMIN"]
    },
    {
        title: "Smena",
        path: "/dashboard/commonSmena",
        Svg: ClockSvg,
        role: ["SUPER_ADMIN","OPERATOR"]
    },
]

const PlanMenu = [
    {
        title: "Rejalar",
        path: "/dashboard/plans",
        Svg: PlanSvg,
        role: ["SUPER_ADMIN"]
    },
]

const NewSidebar = () => {
    const router = useRouter();
    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };
    const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);


    const NavListMenu1 = SidebarItemsMenu1.filter(({role}) => role.includes(userRole));
    const NavListMenu2 = SidebarItemsMenu2.filter(({role}) => role.includes(userRole));
    const PlanListMenu = PlanMenu.filter(({role}) => role.includes(userRole));
    const UmumiyListMenu = Umumiy.filter(({role}) => role.includes(userRole));
    return (
        <SidebarWrap>
            <MyLink className="logo" to="/dashboard/home">
                {/*<LogoSvg className="logoSvg"/>*/}
                {/*<img src="/img/logo.png" alt=""/>*/}
            </MyLink>
            {(() => {
                if (userRole === "OPERATOR") {
                    return(
                        <Collapse bordered={false}
                                  defaultActiveKey={['5']}
                        >
                            <Panel header="Barcha bizneslar" key="5">
                                <div className="sidebar-menu">
                                    {
                                        UmumiyListMenu.map(({title, Svg, path}, idx) => {
                                            return (
                                                <MyLink
                                                    className={router.pathname === path ? "activelink" : "link"}
                                                    to={path}
                                                    key={idx}
                                                >
                                                    {title}
                                                    <Svg/>
                                                </MyLink>
                                            )
                                        })
                                    }
                                </div>
                            </Panel>
                        </Collapse>
                    )
                }else if(userRole==="SUPER_ADMIN" ||userRole==="DIRECTOR" || userRole==="CASHIER"){
                    return (
                        <Collapse bordered={false}
                                  defaultActiveKey={['5']}
                        >
                            <Panel header="Barcha bizneslar" key="5">
                                <div className="sidebar-menu">
                                    {
                                        UmumiyListMenu.map(({title, Svg, path}, idx) => {
                                            return (
                                                <MyLink
                                                    className={router.pathname === path ? "activelink" : "link"}
                                                    to={path}
                                                    key={idx}
                                                >
                                                    {title}
                                                    <Svg/>
                                                </MyLink>
                                            )
                                        })
                                    }
                                </div>
                            </Panel>
                            <Panel header="Metan" key="1">
                                <div className="sidebar-menu">
                                    {
                                        NavListMenu1.map(({title, Svg, path}, idx) => {
                                            return (
                                                <MyLink
                                                    className={router.pathname === path ? "activelink" : "link"}
                                                    to={path}
                                                    key={idx}
                                                >
                                                    {title}
                                                    <Svg/>
                                                </MyLink>
                                            )
                                        })
                                    }
                                    <hr style={{color: "#D1D0E7"}}/>
                                    {
                                        NavListMenu2.map(({title, Svg, path}, idx) => {
                                            return (
                                                <MyLink
                                                    className={router.pathname === path ? "activelink" : "link"}
                                                    to={path}
                                                    key={idx}
                                                >
                                                    {title}
                                                    <Svg/>
                                                </MyLink>
                                            )
                                        })
                                    }
                                </div>
                            </Panel>
                            {/* <Panel header="Propan" key="2">
                                {text}
                            </Panel>
                            <Panel header="Benzin" key="3">
                                {text}
                            </Panel>
                            <Panel header="Issiqxona" key="6">
                                {text}
                            </Panel>
                            <Panel header="Moyka" key="7">
                                {text}
                            </Panel>
                            <Panel header="Arenda" key="8">
                                {text}
                            </Panel>
                            <Panel header="Kafe" key="9">
                                {text}
                            </Panel> */}
                        </Collapse>
                    )
                }
            })()}

        </SidebarWrap>
    );
};

export default NewSidebar;
