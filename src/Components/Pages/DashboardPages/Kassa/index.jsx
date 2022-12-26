import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Cashbox from "./Cashbox";
import {Wrapper} from "../Home/style";

const Kassa = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <Cashbox/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Kassa;