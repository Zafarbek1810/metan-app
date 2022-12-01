import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Chart from "./Charts";
import Cards from "./Cards";

const HomeDashboard = () => {
  return (
    <DashboardLayout>
      <Cards/>
      <Chart/>
    </DashboardLayout>
  );
};

export default HomeDashboard;