import React from 'react';
import ExpensesTable from "./ExpensesTable";
import DashboardLayout from "../../../Layouts/Dashboard";
import {Wrapper} from "../Home/style";

const Xarajatlar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <ExpensesTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Xarajatlar;