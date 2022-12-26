import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import CashierTable from "./CashierTable";
import {Wrapper} from "../Home/style";

const Kassirlar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <CashierTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Kassirlar;