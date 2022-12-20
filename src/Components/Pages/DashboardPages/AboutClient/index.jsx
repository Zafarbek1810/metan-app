import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Statistic from "./Statistic";
import Table from "./Table";

const AboutClient = () => {
  return (
    <DashboardLayout>
      {/* <Statistic/> */}
      <Table/>
    </DashboardLayout>
  );
};

export default AboutClient;