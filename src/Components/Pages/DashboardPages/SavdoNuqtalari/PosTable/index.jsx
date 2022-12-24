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
import {useContext, useContextSelector} from "use-context-selector";
import GlobalContext from "../../../../../Context/GlobalContext/Context";
import {Chip, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
  const savdo_edit = useContextSelector(GlobalContext, (state)=>state.savdo_edit)

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setValue("title", "")
  }

  useEffect(() => {
    setLoading2(true);
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        console.log("out",res)
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
    savdo_edit(outletId)
    router.push("/dashboard/editOutlet/");
  }

  const handleDeleteOutlet = (id) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(async () => {
        await OutletProvider.deleteOutlet(id)
        setOutlet(pre => pre.filter(mod => {
          return mod.id !== id
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
                  <span className="label-text">Savdo nuqtasi nomi</span>
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
      <table className="table table-hover table-borderless">
        <thead>
        <tr>
          {/*<th style={{width: "20px" , display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">ID</th>*/}
          <th style={{width: "15%"}}  className="col">Rasm</th>
          <th style={{minWidth: "50%"}} className="col">Savdo nuqtasi nomi</th>
          <th style={{width: "8%"}} className="col">Ochiq</th>
          <th style={{width: "8%"}} className="col">Faollashtirilgan</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            outlet.length
              ? outlet.map((obj, index) => (
                <tr key={obj.id}>
                  {/*<td style={{width: "20px" , display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">{index + 1}</td>*/}
                  <td style={{width: "15%" }} className="col"><img src="/img/metan.jpg" alt=""/></td>
                  <td style={{minWidth: "50%", display: "flex", justifyContent:"center", alignItems:"center", textAlign:"start"}} className="col">{obj.title}</td>
                  <td style={{width: "8%"}} className="col">
                    <span
                    >
                     <Chip label="Ha" variant="outlined" style={{background:"rgb(114, 225, 40, 0.12)", color:"rgb(114, 225, 40)",border:"none"}} />
                    </span>
                  </td>
                  <td style={{width: "8%"}} className="col">
                    <span >
                     <Chip label="Ha" variant="outlined" style={{background:"rgb(114, 225, 40, 0.12)", color:"rgb(114, 225, 40)",border:"none"}} />
                    </span>
                  </td>
                  <td style={{width: "10%"}} className="col">
                    <div className="btns">
                        <IconButton style={{background:"rgb(255, 77, 73, 0.12)"}} onClick={() => handleDeleteOutlet(obj.id)} aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton style={{background:"rgb(253, 181, 40, 0.12)"}} onClick={() => handleEditUser(obj.id)} aria-label="delete">
                          <EditIcon />
                        </IconButton>
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