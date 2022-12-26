import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ShiftsTable from "./ShiftsTable";
import {Wrapper} from "../Home/style";

const Smena = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <ShiftsTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Smena;