import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard2";
import Dashboard from "./Dashboard";
import ChangeBusines from "./ChangeBusines";
import {StyleWrapper} from "./style";

const AllBusines = () => {
    return (
        <DashboardLayout>
            <StyleWrapper>
                <ChangeBusines/>
                {/*<Dashboard/>*/}
            </StyleWrapper>
        </DashboardLayout>
    );
};

export default AllBusines;