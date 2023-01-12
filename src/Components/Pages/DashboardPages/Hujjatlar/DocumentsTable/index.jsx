import React, {useEffect, useRef, useState} from 'react';
import {DocumentsTableWrapper, FilterWrapper} from "./DocumentsTable.style";
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
import DownloadIcon from "@mui/icons-material/Download";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import MyLink from "../../../../Common/MyLink";

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
  const filModOutletRef = useRef();
  const filModDocTypeRef = useRef();
  const [outletId, setoutletId] = useState(null);
  const [outlet, setOutlet] = useState([]);
  const [documentType, setDocumentType] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);
  const [activeDocType, setActiveDocType] = useState(null);
  const [file, setFile] = useState(null);


  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});
  const filSelectRef = useRef();

  const [currentPage, setCurrentPage] = useState(1);

  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());
  const [date, setDate] = useState(defaultDate);
  const [date2, setDate2] = useState(defaultDate);
  const onSetDate = (event) => {
    setDate(new Date(event.target.value));
    console.log(date.toLocaleDateString("en-CA"))
    // onFilterSum()
  };
  const onSetDate2 = (event) => {
    setDate2(new Date(event.target.value));
    console.log(date.toLocaleDateString("en-CA"))
    // onFilterSum()
  };

  const onSetFile = e => {
    console.log('file: ', e);
    setFile(e.target.files[0]);
};

  const optionExpense = outlet.map((i) => ({
    label: i.title,
    value: i.id,
  }));

  const optionDocument = documentType.map((i) => ({
    label: i.title,
    value: i.id,
  }));


  useEffect(() => {
    async function fn() {
      await OutletProvider.getAllOutlets(0, 1000)
          .then((res) => {
            setOutlet(res.data);
          })
          .catch((err) => {
            console.log(err);
            Message.serverError();
          });
    }
    async function fn2() {
      await DocumentProvider.getDocumentTypes()
          .then((res) => {
            setDocumentType(res.data);
          })
          .catch((err) => {
            console.log(err);
            Message.serverError();
          });
    }

    fn();
    fn2();
  }, []);

  useEffect(() => {
    setActiveOutlet(outlet[0]?.id);
  }, [outlet])
  useEffect(() => {
    setActiveDocType(documentType[0]?.id);
  }, [documentType])

  useEffect(() => {
    setLoading2(true);
    DocumentProvider.getAllDocument(currentPage - 1, 20, filterState)
        .then((res) => {
          console.log("getdoc", res.data);
          setDocument(res.data);
        })
        .catch((err) => {
          console.log(err);
          Message.serverError();
        })
        .finally(() => {
          setLoading2(false);
        });
  }, [forRender, currentPage, filterState]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setValue("title", "");
    setValue("documentNumber", "");
  }

  const onSubmit = async (values) => {
    const body = {};
    if (outlet.length === 1) {
      body.outletId = +outlet[0].id;
    } else {
      body.outletId = +activeOutlet;
    }

    if (documentType.length === 1) {
      body.documentTypeId = +documentType[0].id;
    } else {
      body.documentTypeId = +activeDocType;
    }

    console.log("values", values)

    body.title = values.title;
    body.file =  file; //values.file;
    body.documentNumber = values.documentNumber;
    body.date = date.toLocaleDateString("en-CA");
    body.expiryDate = date2.toLocaleDateString("en-CA");

    var bodyFormData = new FormData();
    bodyFormData.append('title', values.title);
    bodyFormData.append('file', file);//values.file);
    console.log("file1", file);
    // console.log("file2", bodyFormData);
    bodyFormData.append('documentNumber', values.documentNumber);
    bodyFormData.append('date', date.toLocaleDateString("en-CA"));
    bodyFormData.append('expiryDate', date2.toLocaleDateString("en-CA"));
    bodyFormData.append('documentTypeId', body.documentTypeId);
    bodyFormData.append('outletId', body.outletId);

    console.log("body", body)
    setLoading(true);
    

      try {
        const { data } = await DocumentProvider.createDocument(bodyFormData);
        setForRender(Math.random());
        toast.success("Muvaffaqiyatli qo'shildi");
        closeModal();
      } catch (err) {
        console.log(err);
        Message.serverError();
      }
    setLoading(false);
  };


  const handleOutletFilter = (e) => {
    console.log("wtf", e?.target?.value);
    setActiveOutlet(e?.target?.value);

    console.log("asasa", activeOutlet)
  };
  const handleDocTypeFilter = (e) => {
    setActiveDocType(e?.target?.value);
    console.log(activeDocType)
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

  const onOnFilter = () => {
    const outletId = filSelectRef.current?.value;
    setFilterState({ date, outletId });
    setIsFilterOpen(false);
  };

  const onOffFilter = () => {
    if (Object.keys(filterState).length) {
      setFilterState({});
    }
    filSelectRef.current.value = "";
    setIsFilterOpen(false);
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
                  <label className="form-label">Savdo nuqtasi</label>
                  <select value={activeOutlet} ref={filModOutletRef} onChange={handleOutletFilter}
                          className="form-control">
                    <option value="null" disabled>
                      Tanlang
                    </option>
                    {optionExpense.map((i) => (
                        <option value={i.value} key={i.value}>
                          {i.label}
                        </option>
                    ))}
                  </select>
                </label>
                <label className="label">
                  <label className="form-label">Hujjat turi</label>
                  <select value={activeDocType} ref={filModDocTypeRef} onChange={handleDocTypeFilter}
                          className="form-control">
                    <option value="null" disabled>
                      Tanlang
                    </option>
                    {optionDocument.map((i) => (
                        <option value={i.value} key={i.value}>
                          {i.label}
                        </option>
                    ))}
                  </select>
                </label>
                <label className="label">
                  <span className="label-text">Hujjat raqami</span>
                  {errors.documentNumber && (
                      <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                      autoComplete="off"
                      type="text"
                      {...register("documentNumber", { required: true })}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Sana</span>
                  {errors.date && (
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
                <label className="label">
                  <span className="label-text">Amal qilish muddati</span>
                  {errors.expiryDate && (
                      <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                      ref={filModDateRef}
                      autoComplete="off"
                      type="date"
                      // disabled
                      value={date2.toLocaleDateString("en-CA")}
                      onChange={onSetDate2}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Fayl</span>
                  {/*{errors.file && (*/}
                  {/*    <span className="err-text">Majburiy maydon</span>*/}
                  {/*)}*/}
                  <input
                      type="file"
                      name="file"
                      // disabled
                      onChange={onSetFile}
                      required={false}
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
      <div className="filter">
        <FilterWrapper>
          <Button
              variant="contained"
              onClick={() => setIsFilterOpen((p) => !p)}
              style={{
                fontFamily: "Inter",
                color: "#fff",
                background: "#787EFF",
              }}
          >
            Filter
          </Button>

          <div
              className="filter-content"
              style={{ visibility: isFilterOpen ? "visible" : "hidden" }}
          >
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select ref={filSelectRef} className="form-control">
                  <option value={"null"} disabled>
                    Tanlang
                  </option>
                  {optionExpense.map((i) => (
                      <option value={i.value} key={i.value}>
                        {i.label}
                      </option>
                  ))}
                </select>
              </div>
              <div className="d-flex gap-2">
                <Button variant="outlined" onClick={onOffFilter}>
                  Bekor qilish
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={onOnFilter}
                >
                  Qo'llash
                </Button>
              </div>
            </div>
          </div>
        </FilterWrapper>
        {!!Object.keys(filterState).length && (
            <div className="filter-state col-12">
              <div className="filter-state__inner">
                <span>Filtrlangan</span>
                <button className="btn btn-secondary" onClick={onOffFilter}>
                  O'chirish
                </button>
              </div>
            </div>
        )}
      </div>
      <table className="table table-borderless table-hover">
        <thead>
        <tr>
          <th style={{ minWidth: "20%" }} className="col">
            Savdo nuqtasi
          </th>
          <th style={{ minWidth: "30%" }} className="col">
            Hujjat turi
          </th>
          <th style={{ minWidth: "14%" }} className="col">
            Hujjat raqami
          </th>
          <th style={{ minWidth: "13%" }} className="col">
            Berilgan sanasi
          </th>
          <th style={{ minWidth: "13%" }} className="col">
            Amal qilish muddati
          </th>
          <th style={{ minWidth: "10%" }} className="col">
            Amallar
          </th>
        </tr>
        </thead>
        <tbody>
        {!loading2 ? (
            document.length ? (
                document.map((obj, index) => (
                    <tr key={obj.id}>
                      <td style={{ minWidth: "20%" }} className="col">
                        {obj.id}.{obj.outlet?.title}
                      </td>
                      <td style={{ minWidth: "30%" }} className="col">
                        {obj.documentType?.title}
                      </td>
                      <td style={{ minWidth: "14%" }} className="col">
                        {obj.documentNumber}
                      </td>
                      <td style={{ minWidth: "13%" }} className="col">
                        {moment(new Date(obj.date)).format('DD.MM.YYYY')}
                      </td>
                      <td style={{ minWidth: "13%" }} className="col">
                        {moment(new Date(obj.expiryDate)).format('DD.MM.YYYY')}
                      </td>
                      <td style={{ minWidth: "10%" }} className="col">
                        <div className="btns">
                          <IconButton
                              style={{ background: "rgb(255, 77, 73, 0.12)" }}
                              onClick={() => handleDelete(obj.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                              style={{background: "rgb(253, 181, 40, 0.12)", marginLeft:10}}
                              // onClick={obj.documentUrl}
                          >
                            <MyLink to={obj.documentUrl}><DownloadIcon/></MyLink>
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