import React, {useEffect, useState} from 'react';
import {PosTableWrapper} from "./PosTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import Modal from "react-modal";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import MinLoader from "../../../../Common/MinLoader";
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

const PosTable = ({RefObj, setIsOpen}) => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const router = useRouter();
  const [modalIsOpen, setIsModalOpen] = React.useState(false);
  const [outlet, setOutlet] = useState([])
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [forRender, setForRender] = useState(null)

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // useEffect(()=>{
  //   if(isEditMode) {
  //     OutletProvider.getOneOutlet(outletId)
  //       .then(({data}) => {
  //         setValue("title", data.title);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         Message.serverError();
  //       })
  //   }
  // })

  useEffect(() => {
    setLoading2(true);
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        console.log(res)
        setOutlet(res.data)
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
      const {data} = await OutletProvider.addOutlet(body);
      setForRender(Math.random())
      closeModal()
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setLoading(false)
  }

  const handleEditUser = (outletId) => {
    router.push("/dashboard/editOutlet/" + outletId);
  }

  const handleDeleteOutlet = (body) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(async () => {
        const {data} = await OutletProvider.deleteOutlet(body)
        setOutlet(pre => pre.filter(out => {
          return out.id !== id
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <PosTableWrapper>
      <div className="top">
        <h3 className="title">Savdo nuqtalari</h3>
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
                  <span className="label-text">Savdo nuqtasi nomi</span>
                  {errors.name && (
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
      <div className="filter">
        <div className="col-3 mb-2">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "3%"}} className="row">ID</th>
          {/*<th style={{width: "10%"}} className="col">Rasm</th>*/}
          <th style={{width: "10%"}} className="col">Savdo nuqtasi nomi</th>
          <th style={{width: "8%"}} className="col">Ochiq</th>
          <th style={{width: "8%"}} className="col">Faollashtirilgan</th>
          {/*<th style={{width: "10%"}} className="col">Balans</th>*/}
          {/*<th style={{width: "10%"}} className="col">Tarif</th>*/}
          {/*<th style={{width: "30%"}} className="col">Kalit</th>*/}
          <th style={{width: "30%"}} className="col">Sana</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            outlet.length
              ? outlet.map((obj, index) => (
                <tr>
                  <td style={{width: "3%"}} className="row">{index + 1}</td>
                  {/*<td style={{width: "10%"}} className="col"><img src="/img/metan.png" alt=""/></td>*/}
                  <td style={{width: "10%"}} className="col">{obj.title}</td>
                  <td style={{width: "8%"}} className="col">Ha</td>
                  <td style={{width: "8%"}} className="col">Ha</td>
                  {/*<td style={{width: "10%"}} className="col">0.00</td>*/}
                  {/*<td style={{width: "10%"}} className="col">500.000</td>*/}
                  {/*<td style={{width: "30%"}} className="col">946b1920-68ab-11ed-87b8-0242ac12000c</td>*/}
                  <td style={{width: "10%"}} className="col">12.12.2022</td>
                  <td style={{width: "10%"}} className="col">
                    <div className="btns">
                      <button onClick={() => handleDeleteOutlet(obj.id)}>
                        <DeleteSvg/>
                      </button>
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
              }><h3>Savdo nuqtasi mavjud emas!</h3></div>
            : <MinLoader/>
        }


        </tbody>
      </table>
    </PosTableWrapper>
  );
};

export default PosTable;