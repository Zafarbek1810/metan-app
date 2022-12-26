import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import EditCashbackTable from "./EditCashbackTable";
import {Wrapper} from "../Home/style";

const EditCashback = ({cashbackId}) => {
  return (
    <DashboardLayout>
      <Wrapper>
          <EditCashbackTable cashId={cashbackId}/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default EditCashback;
