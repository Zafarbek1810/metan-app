import React, {useEffect, useState} from 'react';
import {ServicesTableWrapper} from "./ServicesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import Modal from "react-modal";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import MinLoader from "../../../../Common/MinLoader";
import {useContextSelector} from "use-context-selector";
import GlobalContext from "../../../../../Context/GlobalContext/Context";
import {useRouter} from "next/router";

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


const ServicesTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const cash_edit = useContextSelector(GlobalContext, (state)=>state.cash_edit)
  const router = useRouter();
  const [modalIsOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [forRender, setForRender] = useState(null)
  const [cashback, setCashback] = useState([])


  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setValue("title", "")
  }

  useEffect(() => {
    setLoading2(true);
    CashbackProvider.getAllCashback()
      .then(res => {
        console.log(res)
        setCashback(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender])

  const onSubmit = async (values) => {
    const body = {}
    body.title = values.title;

    setLoading(true)
    try {
      const {data} = await CashbackProvider.addCashback(body);
      setForRender(Math.random())
      closeModal()
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setLoading(false)
  }

  // const handleEditUser = (cashId) => {
  //   cash_edit(cashId)
  //   router.push("/dashboard/editCashback/");
  // }



  return (
    <ServicesTableWrapper>
      <div className="top">
        <h3 className="title">Keshbeklar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" onClick={openModal}>
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
                  <span className="label-text">Keshbek nomi</span>
                  {errors.title && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="text"
                    {...register("title", {required: true})}
                  />
                </label>
                <div className="btns">
                  <button type="button" className="btn btn-outline-warning" onClick={closeModal}>Bekor qilish</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>Qo'shish {loading &&
                  <ButtonLoader/>}</button>
                </div>
              </form>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "10%"}} className="row">Nomi</th>
          <th style={{width: "50%"}} className="col">Faol savdo nuqtalari</th>
          <th style={{width: "10%"}} className="col">Boshlanish  sanasi</th>
          <th style={{width: "10%"}} className="col">To'xtash sanasi</th>
          <th style={{width: "10%"}} className="col">Status</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            cashback.length
            ? cashback.map((obj, index)=>(
                <tr key={obj.id}>
                  <td style={{width: "10%"}} className="row">{obj.name}</td>
                  <td style={{width: "50%"}} className="col">Guliston Metan, Saidkent Metan, Propan Metan, 24/25 Avtobaza Metan, </td>
                  <td style={{width: "10%"}} className="col">20.11.2022 22:06</td>
                  <td style={{width: "10%"}} className="col">{obj.endedDate} </td>
                  <td style={{width: "10%"}} className="col">Ishga tushirildi</td>
                  <td style={{width: "10%"}} className="col">
                    <div className="btns">
                      {/*<button>*/}
                      {/*  <DeleteSvg/>*/}
                      {/*</button>*/}
                      <button onClick={() => handleEditUser(obj.id)}>
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
              }><h3>Keshbek mavjud emas</h3></div>
            : <MinLoader/>
        }
        </tbody>
      </table>
    </ServicesTableWrapper>
  );
};

export default ServicesTable;