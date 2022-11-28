import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Chart from "./Charts";

const HomeDashboard = () => {
  return (
    <DashboardLayout>
      <Chart/>
    </DashboardLayout>
  );
};

export default HomeDashboard;