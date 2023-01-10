import React, {useEffect, useRef, useState} from 'react';
import {DocumentsTableWrapper} from "./DocumentsTable.style";
import Modal from "react-modal";
import {useForm} from "react-hook-form";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {toast} from "react-toastify";
import {Avatar, Button, IconButton} from "@mui/material";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditIcon from "@mui/icons-material/Edit";
import MinLoader from "../../../../Common/MinLoader";
import DeleteIcon from "@mui/icons-material/Delete";
import DocumentProvider from "../../../../../Data/Providers/DocumentProvider";
import moment from "moment";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minHeight: 200,
    width: 600,
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 0,
    overlay: {
      background: "red",
    },
  },
};

Modal.setAppElement("#__next");
const DocumentsTable = ({ RefObj, setIsOpenModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    control,
  } = useForm({
    defaultValues: {},
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [document, setDocument] = useState([]);
  const [forRender, setForRender] = useState(null);
  const filModDateRef = useRef();

  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());
  const [date, setDate] = useState(defaultDate);
  const onSetDate = (event) => {
    setDate(new Date(event.target.value));
    console.log(date.toLocaleDateString("en-CA"))
    // onFilterSum()
  };

  useEffect(() => {
    setLoading2(true);
    DocumentProvider.getAllDocument()
        .then((res) => {
          console.log(res);
          setDocument(res.data);
        })
        .catch((err) => {
          console.log(err);
          Message.serverError();
        })
        .finally(() => {
          setLoading2(false);
        });
  }, [forRender]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setValue("name", "");
    setValue("login", "");
    setValue("pass", "");
  }

  const onSubmit = async (values) => {
    const body = {};
    body.title = values.title;
    body.expiryDate = date.toLocaleDateString("en-CA");

    setLoading(true);
      try {
        const { data } = await DocumentProvider.createDocument(body);
        setForRender(Math.random());
        toast.success("Muvaffaqiyatli qo'shildi");
        closeModal();
      } catch (err) {
        console.log(err);
        Message.serverError();
      }
    setLoading(false);
  };

  const handleDelete = (id) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`;
    setIsOpenModal(true);
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
        .then(async () => {
          await DocumentProvider.deleteDocument(id);
          setDocument((pre) =>
              pre.filter((mod) => {
                return mod.id !== id;
              })
          );
          toast.success("Muvaffaqiyatli o'chirildi")
          setForRender(Math.random());
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message);
        });
  };


  // body.date = date.toLocaleDateString("en-CA");


  return (
    <DocumentsTableWrapper>
      <div className="top">
        <h3 className="title">Hujjatlar</h3>
        <div className="modal-wrapper">
          <Button
              variant="contained"
              onClick={openModal}
              style={{
                fontFamily: "Inter",
                color: "#fff",
                background: "#787EFF",
              }}
          >
            + Qo'shish
          </Button>
          {/*====MODAL====*/}
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
          >
            <ModalHeader className="modal-header">
              <h2 className="title">Qo'shish</h2>
              <button className="closeSvg" onClick={closeModal}>
                <CloseSvg />
              </button>
            </ModalHeader>
            <ModalContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className="label-text">Nomi</span>
                  {errors.title && (
                      <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                      autoComplete="off"
                      type="text"
                      {...register("title", { required: true })}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Tugash sanasi</span>
                  {errors.expiryDate && (
                      <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                      ref={filModDateRef}
                      autoComplete="off"
                      type="date"
                      // disabled
                      value={date.toLocaleDateString("en-CA")}
                      onChange={onSetDate}
                  />
                </label>
                <div className="btns">
                  <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={closeModal}
                  >
                    Bekor qilish
                  </button>
                  <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                  >
                    Saqlash {loading && <ButtonLoader />}
                  </button>
                </div>
              </form>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <table className="table table-borderless table-hover">
        <thead>
        <tr>
          <th style={{ minWidth: "10%" }} className="col">
            ID
          </th>
          <th style={{ minWidth: "40%" }} className="col">
            Nomi
          </th>
          <th style={{ minWidth: "30%" }} className="col">
            Tugash vaqti
          </th>
          <th style={{ minWidth: "20%" }} className="col">
            Amallar
          </th>
        </tr>
        </thead>
        <tbody>
        {!loading2 ? (
            document.length ? (
                document.map((obj, index) => (
                    <tr key={obj.id}>
                      <td style={{ minWidth: "10%" }} className="col">
                        {obj.id}
                      </td>
                      <td style={{ minWidth: "40%" }} className="col">
                        {obj.title}{" "}
                      </td>
                      <td style={{ minWidth: "30%" }} className="col">
                        {moment(new Date(obj.expiryDate)).format('DD.MM.YYYY')}
                      </td>
                      <td style={{ minWidth: "20%" }} className="col">
                        <div className="btns">
                          <IconButton
                              style={{ background: "rgb(255, 77, 73, 0.12)" }}
                              onClick={() => handleDelete(obj.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                ))
            ) : (
                <div
                    style={{
                      textAlign: "center",
                      padding: 30,
                    }}
                >
                  <h3 style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                    Hujjatlar mavjud emas!
                  </h3>
                </div>
            )
        ) : (
            <MinLoader />
        )}
        </tbody>
      </table>
    </DocumentsTableWrapper>
  );
};

export default DocumentsTable;