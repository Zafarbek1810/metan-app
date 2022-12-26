import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import DirectorTable from "./DirectorTable";
import {Wrapper} from "../Home/style";

const Director = () => {
  return (
    <DashboardLayout>
      <Wrapper>
          <DirectorTable/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Director;