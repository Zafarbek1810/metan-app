import React, {useState} from 'react';
import {Layout, Menu, theme} from 'antd';
import {useContextSelector} from "use-context-selector";
import UserContext from "../../Context/UserContext";
import { SettingOutlined } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
const { Panel } = Collapse;
const { Option } = Select;
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
  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
      <SettingOutlined
          onClick={(event) => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
          }}
      />
  );
  const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);


  const NavListMenu = SidebarItemsMenu.filter(({role}) => role.includes(userRole));

  return (
      <>
        <Collapse
            defaultActiveKey={['1']}
            onChange={onChange}
            expandIconPosition={expandIconPosition}
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
        <br />
        <span>Expand Icon Position: </span>
        <Select
            value={expandIconPosition}
            style={{
              margin: '0 8px',
            }}
            onChange={onPositionChange}
        >
          <Option value="start">start</Option>
          <Option value="end">end</Option>
        </Select>
      </>
  );
};

export default NewLayout;