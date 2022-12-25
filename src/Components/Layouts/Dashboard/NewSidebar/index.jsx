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

const {Panel} = Collapse;
const {Option} = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

const PlanMenu=[
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


    const NavListMenu = SidebarItemsMenu.filter(({role}) => role.includes(userRole));
    const PlanListMenu = PlanMenu.filter(({role}) => role.includes(userRole));
    return (
        <SidebarWrap>
                <MyLink className="logo" to="/dashboard/home">
                    {/*<LogoSvg className="logoSvg"/>*/}
                    <img src="/img/logo.png" alt=""/>
                </MyLink>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Metan shahobchalar" key="1">
                        <div className="sidebar-menu">
                        {
                            NavListMenu.map(({title, Svg, path}, idx) => {
                                return (
                                    <MyLink
                                        className={router.pathname === path ?  "activelink" : "link"}
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
                    </Panel>
                    <Panel header="Propan shahobchalar" key="2">
                        {text}
                    </Panel>
                    <Panel header="Benzin shahobchalar" key="3">
                        {text}
                    </Panel>
                    <Panel header="Rejalar" key="4">
                        <div className="sidebar-menu">
                            {
                                PlanListMenu.map(({title, Svg, path}, idx) => {
                                    return (
                                        <MyLink
                                            className={router.pathname === path ?  "activelink" : "link"}
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
                    </Panel>
                </Collapse>
        </SidebarWrap>
    );
};

export default NewSidebar;
