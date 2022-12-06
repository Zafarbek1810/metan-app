import React, {useRef, useState} from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import EditTable from "./EditTable";
import ConfirmModal from "../../../Common/ConfirmModal";
import {ModalContextProvider} from "../../../../Context/ModalContext";

const EditSavdo = ({outletId}) => {
  const RefObj = useRef({resolve(){}, reject(){}});
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <DashboardLayout>
        <EditTable id={outletId} RefObj={RefObj} setIsOpen={setIsOpen}/>
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

export default EditSavdo;