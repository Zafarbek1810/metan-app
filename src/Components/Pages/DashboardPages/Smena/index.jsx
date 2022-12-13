import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ShiftsTable from "./ShiftsTable";
import Table from "./Example";

const Smena = () => {
  return (
    <DashboardLayout>
      <ShiftsTable/>
      {/*<Table/>*/}
    </DashboardLayout>
  );
};

export default Smena;