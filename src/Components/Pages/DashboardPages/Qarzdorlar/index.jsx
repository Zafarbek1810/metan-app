import React from 'react';
import DebtorsTable from "./DebtorsTable";
import DashboardLayout from "../../../Layouts/Dashboard";
import {Wrapper} from "../Home/style";

const Qarzdorlar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <DebtorsTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Qarzdorlar;