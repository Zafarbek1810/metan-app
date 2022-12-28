import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard2";
import Table from "./Table";
import {Wrapper} from "../Home/style";
import ConfirmModal from "../../../Common/ConfirmModal";
import {ModalContextProvider} from "../../../../Context/ModalContext";

const Projects = () => {
    const RefObj = useRef({resolve(){}, reject(){}});
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <DashboardLayout>
                <Wrapper>
                    <Table RefObj={RefObj} setIsOpen={setIsOpen}/>
                </Wrapper>
            </DashboardLayout>
            <ModalContextProvider
                RefObj={RefObj}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            >
                <ConfirmModal>
                    {RefObj.current.textContent}
                </ConfirmModal>
            </ModalContextProvider>
        </>
    );
};

export default Projects;