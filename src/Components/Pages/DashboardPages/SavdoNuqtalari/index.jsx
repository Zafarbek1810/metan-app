import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import PosTable from "./PosTable";
import {ModalContextProvider} from "../../../../Context/ModalContext";
import ConfirmModal from "../../../Common/ConfirmModal";
import {Wrapper} from "../Home/style";

const SavdoNuqtalari = () => {
  const RefObj = useRef({resolve(){}, reject(){}});
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <DashboardLayout>
        <Wrapper>
            <PosTable RefObj={RefObj} setIsOpen={setIsOpen}/>
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

export default SavdoNuqtalari;