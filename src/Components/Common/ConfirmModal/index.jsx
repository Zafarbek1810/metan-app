import React, {useContext} from 'react';
import Modal from 'react-modal';
import ModalContext from "../../../Context/ModalContext";
import {ModalContent, ModalFooter, ModalHeader} from "./style";
import {Input} from "antd";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    minHeight: 200,
    maxWidth: 400,
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 8
  },
};

Modal.setAppElement('#__next');

const Modals=()=>{
  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Barcha mijozlarga push-xabarnoma yuborish</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            <div className="input">
              <label>Nomi<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Ta'rif<span>*</span></label>
              <Input size="large"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Bekor qilish</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const ConfirmModal = ({children}) => {
  const {RefObj, setIsOpen, modalIsOpen} = useContext(ModalContext);

  function ResolveAndClose() {
    RefObj.current.resolve();
    setIsOpen(false);
  }

  function RejectAndClose() {
    RefObj.current.reject();
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={RejectAndClose}
      style={customStyles}

    >
      <ModalHeader>
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Chiqish</h1>
        <button type="button"  onClick={RejectAndClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
      </ModalHeader>
      <ModalContent>
        <p className="text">
          {children}
        </p>
      </ModalContent>
      <ModalFooter  className="modal-footer">
        {/*<button*/}
        {/*  onClick={RejectAndClose}*/}
        {/*  type="button"*/}
        {/*>*/}
        {/*  Bekor qilish*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  onClick={ResolveAndClose}*/}
        {/*  type="button"*/}
        {/*>*/}
        {/*  Tasdiqlash*/}
        {/*</button>*/}
          <button type="button" onClick={RejectAndClose} className="btn btn-outline-warning" data-bs-dismiss="modal">Bekor qilish</button>
          <button type="button" onClick={ResolveAndClose} className="btn btn-primary" data-bs-dismiss="modal">Tasdiqlash</button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
