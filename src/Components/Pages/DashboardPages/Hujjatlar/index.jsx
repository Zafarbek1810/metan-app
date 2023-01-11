import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import DocumentsTable from "./DocumentsTable";
import {Wrapper} from "../Home/style";
import ConfirmModal from "../../../Common/ConfirmModal";
import {ModalContextProvider} from "../../../../Context/ModalContext";

const Hujjatlar = () => {
    const RefObj = useRef({resolve(){}, reject(){}});
    const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
        <DashboardLayout>
            <Wrapper>
                <DocumentsTable RefObj={RefObj} setIsOpenModal={setIsOpen}/>
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

export default Hujjatlar;