import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ServicesTable from "./ServicesTable";
import {Wrapper} from "../Home/style";

const Keshbek = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <ServicesTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Keshbek;