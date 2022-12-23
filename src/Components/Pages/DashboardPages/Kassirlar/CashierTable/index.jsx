import React, {useEffect, useState} from 'react';
import {CashierTableWrapper, ModalContent, ModalHeader} from "./CashierTable.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {useForm} from "react-hook-form";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import Modal from "react-modal";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    minHeight: 200,
    width: 600,
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 0,
    overlay: {
      background: "red"
    }
  },
};

Modal.setAppElement('#__next');

const CashierTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editingCashier, setEditingCashier] = useState(null)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [cashiers, setCashiers] = useState([])
  const [forRender, setForRender] = useState(null)

  useEffect(() => {
    setLoading2(true);
    UserProvider.getAllCashiers(0, 1000)
      .then(res => {
        console.log(res)
        setCashiers(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setEditingCashier(null)
    setValue("name", "")
    setValue("login", "")
    setValue("pass", "")
  }

  const onSubmit = async (values) => {
    const body = {}
    body.fullName = values.name;
    body.username = values.login;
    body.password = values.pass;

    setLoading(true)
    if (editingCashier) {
      try {
        body.id = editingCashier.id

        const {data} = await UserProvider.updateCashier(body);
        setForRender(Math.random());
        toast.success("Muvaffaqiyatli o'zgartirildi")
        closeModal()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    } else {
      try {
        const {data} = await UserProvider.createCashier(body);
        setForRender(Math.random())
        toast.success("Muvaffaqiyatli qo'shildi")
        closeModal()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }
    setLoading(false)
  }

  const handleEdit = (obj) => {
    setEditingCashier(obj)
    setIsOpen(true)
  }

  useEffect(() => {
    if (editingCashier) {
      setValue("name", editingCashier.fullName)
      setValue("login", editingCashier.username)
      setValue("pass", "")
    }
  }, [modalIsOpen])


  return (
    <CashierTableWrapper>
      <div className="top">
        <h3 className="title">Kassirlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" onClick={openModal} style={{fontFamily:"Inter"}}>
            + Qo'shish
          </button>
          {/*====MODAL====*/}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <ModalHeader className="modal-header">
              <h2 className="title">Qo'shish</h2>
              <button className="closeSvg" onClick={closeModal}><CloseSvg/></button>
            </ModalHeader>
            <ModalContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className="label-text">Ism</span>
                  {errors.name && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="text"
                    {...register("name", {required: true})}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Login</span>
                  {errors.login && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="text"
                    {...register("login", {required: true})}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Maxfiy so'z</span>
                  {errors.pass && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="text"
                    {...register("pass", {required: true})}
                  />
                </label>
                <div className="btns">
                  <button type="button" className="btn btn-outline-warning" onClick={closeModal}>Bekor qilish</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>Saqlash {loading &&
                  <ButtonLoader/>}</button>
                </div>
              </form>
            </ModalContent>
          </Modal>
        </div>

      </div>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "40%"}} className="col">To'liq ismi</th>
          <th style={{width: "30%"}} className="col">Login</th>
          <th style={{width: "30%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            cashiers.length
              ? cashiers.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{width: "40%"}} className="col">{index+1}. {obj.fullName} </td>
                  <td style={{width: "30%"}} className="col">{obj.username}</td>
                  <td style={{width: "30%"}} className="col">
                    <div className="btns">
                      <button onClick={() => handleEdit(obj)}>
                        <EditSvg/>
                      </button>
                    </div>
                  </td>
                </tr>
              )) : <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3>Kassirlar mavjud emas!</h3></div>
            : <MinLoader/>
        }
        </tbody>
      </table>
    </CashierTableWrapper>
  );
};

export default CashierTable;