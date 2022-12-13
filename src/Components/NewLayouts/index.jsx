import React, {useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import HomeSvg from "../Common/Svgs/HomeSvg";
import CheckSvg from "../Common/Svgs/CheckSvg";
import UsersSvg from "../Common/Svgs/UsersSvg";
import FireSvg from "../Common/Svgs/FireSvg";
import CashSvg from "../Common/Svgs/CashSvg";
import ShopSvg from "../Common/Svgs/ShopSvg";
import CashbackSvg from "../Common/Svgs/CashbackSvg";
import ClockSvg from "../Common/Svgs/ClockSvg";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../Context/UserContext";
import MyLink from "../Common/MyLink";
import {useRouter} from "next/router";
import {NewLayoutWrapper} from "./NewLayout.style";

const {Header, Sider, Content} = Layout;
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
    title: "Kolonkalar",
    path: "/dashboard/gas-columns",
    Svg: FireSvg,
    role: ["CASHIER"]
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
    role: ["SUPER_ADMIN", "DIRECTOR"]
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


const NewLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);


  const NavListMenu = SidebarItemsMenu.filter(({role}) => role.includes(userRole));

  return (
    <NewLayoutWrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{
          padding: 0,
          background: colorBgContainer,
        }}>
          <div className="logo"><img src="/img/logo.jpeg" alt=""/></div>
          <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeSvg/>,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <HomeOutlined/>,
                label: 'nav 1',
              },
              {
                key: '3',
                icon: <HomeOutlined/>,
                label: 'nav 1',
              },
              {
                key: '4',
                icon: <HomeOutlined/>,
                label: 'nav 1',
              },
            ]}

          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              // background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </NewLayoutWrapper>
  );
};

export default NewLayout;