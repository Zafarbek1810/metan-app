import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import GasColumnReport from "./GasColumnReport";
import {Wrapper} from "../Home/style";

const KolonkalarReport = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <GasColumnReport/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default KolonkalarReport;