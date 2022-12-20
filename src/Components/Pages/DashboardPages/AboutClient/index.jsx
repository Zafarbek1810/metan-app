import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Statistic from "./Statistic";
import Table from "./Table";

const AboutClient = ({clientId}) => {
  return (
    <DashboardLayout>
      {/* <Statistic/> */}
      <Table id={clientId}/>
    </DashboardLayout>
  );
};

export default AboutClient;