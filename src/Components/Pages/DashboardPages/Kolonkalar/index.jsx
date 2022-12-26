import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import GasColumns from "./GasColumns";
import {Wrapper} from "../Home/style";

const Kolonkalar = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <GasColumns/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Kolonkalar;