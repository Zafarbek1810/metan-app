import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard2";
import ListTable from "./ListTable";
import {Wrapper} from "../Home/style";
import ConfirmModal from "../../../Common/ConfirmModal";
import {ModalContextProvider} from "../../../../Context/ModalContext";

const Rejalar = () => {
    const RefObj = useRef({resolve(){}, reject(){}});
    const [modalIsOpen1, setIsOpen1] = useState(false);

    return (
        <>
            <DashboardLayout>
                <Wrapper>
                    <ListTable RefObj={RefObj} setIsOpen1={setIsOpen1}/>
                </Wrapper>
            </DashboardLayout>
            <ModalContextProvider
                RefObj={RefObj}
                modalIsOpen={modalIsOpen1}
                setIsOpen={setIsOpen1}
            >
                <ConfirmModal>
                    {RefObj.current.textContent}
                </ConfirmModal>
            </ModalContextProvider>
        </>
    );
};

export default Rejalar;