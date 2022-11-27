import React from 'react';
import {Wrapper} from "./style";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashHeader";

const DashboardLayout = ({children}) => {
  return (
    <Wrapper>
      <div className="layout__sidebar">
        <Sidebar/>
      </div>
      <div className="layout__right">
        <div className="layout__top">
          <DashboardHeader/>
        </div>
        <main className="layout__main">
          {children}
        </main>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;