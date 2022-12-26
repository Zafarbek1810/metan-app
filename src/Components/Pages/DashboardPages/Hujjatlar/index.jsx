import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import DocumentsTable from "./DocumentsTable";
import {Wrapper} from "../Home/style";

const Hujjatlar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <DocumentsTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Hujjatlar;