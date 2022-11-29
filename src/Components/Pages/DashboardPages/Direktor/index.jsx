import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import DirectorTable from "./DirectorTable";

const Director = () => {
  return (
    <DashboardLayout>
      <DirectorTable/>
    </DashboardLayout>
  );
};

export default Director;