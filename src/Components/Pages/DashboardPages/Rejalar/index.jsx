import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ListTable from "./ListTable";
import {Wrapper} from "../Home/style";

const Rejalar = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <ListTable/>
            </Wrapper>
        </DashboardLayout>
    );
};

export default Rejalar;