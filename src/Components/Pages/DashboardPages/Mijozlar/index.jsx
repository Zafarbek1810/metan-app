import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ClientsTable from "./ClientsTable";
import {Wrapper} from "../Home/style";

const Mijozlar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <ClientsTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Mijozlar;