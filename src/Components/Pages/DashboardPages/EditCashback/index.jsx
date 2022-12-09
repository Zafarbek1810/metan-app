import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import EditCashbackTable from "./EditCashbackTable";

const EditCashback = ({cashbackId}) => {
  return (
    <DashboardLayout>
      <EditCashbackTable cashId={cashbackId}/>
    </DashboardLayout>
  );
};

export default EditCashback;
