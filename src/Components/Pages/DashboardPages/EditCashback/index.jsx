import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import EditCashbackTable from "./EditCashbackTable";

const EditCashback = ({cashbackId}) => {
  return (
    <DashboardLayout>
      <EditCashbackTable id={cashbackId}/>
    </DashboardLayout>
  );
};

export default EditCashback;