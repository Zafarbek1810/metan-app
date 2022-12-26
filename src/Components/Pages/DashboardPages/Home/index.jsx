import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Chart from "./Charts";
import Cards from "./Cards";
import {Wrapper} from "./style";

const HomeDashboard = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <Cards/>
          <Chart/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default HomeDashboard;