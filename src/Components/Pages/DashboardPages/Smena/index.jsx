import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import ShiftsTable from "./ShiftsTable";
import {Wrapper} from "../Home/style";
import {ModalContextProvider} from "../../../../Context/ModalContext";
import ConfirmModal from "../../../Common/ConfirmModal";

const Smena = () => {
    const RefObj = useRef({resolve(){}, reject(){}});
    const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
        <DashboardLayout>
            <Wrapper>
                <ShiftsTable RefObj={RefObj} setIsOpen={setIsOpen}/>
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

export default Smena;