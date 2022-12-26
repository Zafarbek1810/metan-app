import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ChekTable from "./ChekTable";
import {Wrapper} from "../Home/style";

const Checks = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <ChekTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Checks;