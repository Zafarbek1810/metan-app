import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import Statistic from "./Statistic";
import Table from "./Table";
import {Wrapper} from "../Home/style";

const AboutClient = ({clientId}) => {
  return (
    <DashboardLayout>
      <Wrapper>
          {/* <Statistic/> */}
          <Table id={clientId}/>
      </Wrapper>
    </DashboardLayout>
  );
};

export default AboutClient;