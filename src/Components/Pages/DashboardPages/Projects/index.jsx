import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard2";
import Table from "./Table";
import {Wrapper} from "../Home/style";

const Projects = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Table/>
            </Wrapper>
        </DashboardLayout>
    );
};

export default Projects;