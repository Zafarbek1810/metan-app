import React, {useEffect, useState} from 'react';
import {Button, Chip, Drawer, IconButton} from "@mui/material";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import MinLoader from "../../../../Common/MinLoader";
import {TableWrapper} from "../../Projects/Table/Table.style";
import Pagination from "rc-pagination";
import OperationProvider from "../../../../../Data/Providers/OperationProvider";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import Select from "react-select";
import {Controller, useForm} from "react-hook-form";
import {WRAPPER} from "./style";
import ArticleProvider from "../../../../../Data/Providers/ArticleProvider";
import {FilterWrapper} from "../../KolonkalarReport/GasColumnReport/GasColumnReport.style";
import {toast} from "react-toastify";
import CardSvg from "../../../../Common/Svgs/CardSvg";
import DollarSvg2 from "../../../../Common/Svgs/DollarSvg2";
import DollarSvg from "../../../../Common/Svgs/DollarSvg";
import DeleteIcon from "@mui/icons-material/Delete";
import {NumericFormat} from "react-number-format";
import { Radio } from 'antd';
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useRouter} from "next/router";
import {setSectionValue} from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";


const MODAL_TYPE = {
  INCOME: "INCOME",
  OUTCOME: "OUTCOME",
}


const Main = ({RefObj, setIsOpen}) => {
  const {register, handleSubmit, control, reset} = useForm();
  const projectForm = useForm();
  const articleForm = useForm();
  const filterForm = useForm();
  const [forRender, setForRender] = useState(null)


  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1)
  const [modalType, setModalType] = useState(MODAL_TYPE.INCOME);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenArticleDrawer, setIsOpenArticleDrawer] = useState(false);
  const [isOpenProjectDrawer, setIsOpenProjectDrawer] = useState(false);

  const [operationLoading, setOperationLoading] = useState(false);

  const [operations, setOperations] = useState({data: [], count: 0});
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);
  const [operDel, setOperDel]= useState([])
  const [currency, setCurrency] = useState([])

  // SELECT OPTIONSLARI
  const projectOptions = [{label: "Loyiha qo'shish +", value: "ADD_PROJECT"}, ...projects.map(i => ({
    label: i.title,
    value: i.id
  }))];
  const filterProjectOptions = [{label: "Tanlang", value: "nullForProjects"}, ...projects.map(i => ({
    label: i.title,
    value: i.id
  }))]

  const articleOptions = [{label: "Artikl qo'shish +", value: "ADD_ARTICLE"}, ...articles.map(i => ({
    label: i.title,
    value: i.title
  }))];
  const filterArticleOptions = [{label: "Tanlang", value: "nullForArticles"}, ...articles.map(i => ({
    label: i.title,
    value: i.title
  }))]
  const operationOptions = [{label: "Tanlang", value: "nullForOperationType"}, {label: "Kirim", value: MODAL_TYPE.INCOME},{label: "Chiqim", value: MODAL_TYPE.OUTCOME}]


  const currencyOptions=[{label: "Tanlang", value: "nullForCurrency"}, {label: "UZS", value: "UZS"},{label: "USD", value: "USD"}]

  // FILTER STATE
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});

  const toggleFilter = () => {
    setIsFilterOpen(p => !p);
  }

  const onFilterClear = () => {
    if (Object.keys(filterState).length) {
      setFilterState({});
    }
    filterForm.setValue("project", filterProjectOptions[0]);
    filterForm.setValue("article", filterArticleOptions[0]);
    filterForm.setValue("operationType", operationOptions[0]);
    filterForm.setValue("currency", currencyOptions[0]);
    filterForm.setValue("startDate", "");
    filterForm.setValue("endDate", "");
    setIsFilterOpen(false);
  };

  const onFilterSubmit = filterForm.handleSubmit((values) => {
    const obj = {
      projectId: values.project?.value === "nullForProjects" ? "" : values.project?.value,
      articleId: values.article?.value === "nullForArticles" ? "" : values.article?.value,
      operationType: values.operationType?.value === "nullForOperationType" ? "" : values.operationType?.value,
      startDate: values.startDate?.split("-").reverse().join("-"),
      endDate: values.endDate?.split("-").reverse().join("-"),
      currency:values.currency?.value === "nullForCurrency" ? "" : values.currency?.value
    }
    setFilterState(obj);
    setIsFilterOpen(false);
  })

  useEffect(() => {
    onFilterSubmit(filterForm.getValues());
  }, [
    filterForm.watch("project"), 
    filterForm.watch("article"), 
    filterForm.watch("operationType"), 
    filterForm.watch("currency"),
    filterForm.watch("startDate"),
    filterForm.watch("endDate")
  ])


  // ASOSIY DRAWER
  const openModal = (type) => {
    setModalType(type);
    setIsOpenModal(true);
  }
  const onCloseModal = () => {
    setIsOpenModal(false);
  }


  // ARTICLE QO'SHISH DRAWER
  const handleOpenArticleDrawer = () => {
    setIsOpenArticleDrawer(true);
  }
  const handleCloseArticleDrawer = () => {
    setIsOpenArticleDrawer(false);
  }


  // PROJECT QO'SHISH DRAWER
  const handleOpenProjectDrawer = () => {
    setIsOpenProjectDrawer(true);
  }
  const handleCloseProjectDrawer = () => {
    setIsOpenProjectDrawer(false);
  }


  // GET QILUVCHI FUNKSIYALAR
  function getProjects() {
    ProjectsProvider.getAllProjects().then(res => {
      setProjects(res.data.data);
    }, err => {
      console.log(err);
    })
  }

  function getArticles() {
    ArticleProvider.getAll().then(res => {
      setArticles(res.data);
    }, err => {
      console.log(err);
    })
  }

  function getOperations() {
    setOperationLoading(true);
    OperationProvider.getAll(page, filterState).then(res => {
      console.log("z",res.data.data)
      setCurrency(res.data.data)
      setOperations(res.data);
      setOperDel(res.data.data)
      setModalSum("")
      console.log(operDel)
    }, err => {
      console.log(err);
    }).finally(() => setOperationLoading(false))
  }

  useEffect(() => {
    getProjects();
    getArticles();
  }, [])

  useEffect(() => {
    getOperations();
  }, [filterState,forRender, page])

  const [radioVal, setRadioVal] = useState("UZS")

  const onChangeRadio = (e) => {
    setRadioVal(e.target.value)
    // console.log(`radio checked:${e.target.value}`);
  };

  // DRAWERDAGI FORMA SUBMIT HANDLERLARI

  const onSubmitOperation = handleSubmit(async (values) => {
    const body = {
      projectId: values.projectId?.value,
      articleId: values.articleId?.label,
      description: values.description,
      amount: +modalSum,
      date: values.date,
      currency: radioVal
    }
    setLoading(true);
    if (modalType === MODAL_TYPE.INCOME) {
      await OperationProvider.addIncome(body).then(res => {
        console.log(res);
        reset();
        getOperations();
        toast.success("Qo'shildi")
        onCloseModal();
      }, err => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      })
    } else {
      await OperationProvider.addOutcome(body).then(res => {
        console.log(res);
        reset();
        getOperations();
        toast.success("Qo'shildi")
        onCloseModal();
      }, err => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      })
    }
    setLoading(false);
  });

  const submitAddProject = projectForm.handleSubmit((values) => {
    ProjectsProvider.addProject(values).then(res => {
      console.log(res);
      projectForm.reset();
      getProjects();
      handleCloseProjectDrawer();
    }, err => {
      console.log(err)
    })
  })

  const submitAddArticle = articleForm.handleSubmit((values) => {
    ArticleProvider.add(values).then(res => {
      console.log(res);
      articleForm.reset();
      getArticles();
      handleCloseArticleDrawer();
    }, err => {
      console.log(err)
    })
  })


  const handleDeleteOperation=(id)=>{
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`;
    setIsOpen(true);
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
        .then(async () => {
          await OperationProvider.deleteOperation(id);
          setOperDel((pre) =>
              pre.filter((mod) => {
                return mod.id !== id;
              })
          );
          setForRender(Math.random());
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const [modalSum, setModalSum] = useState(null)



  const router = useRouter()

  console.log(router.query)

  useEffect(() => {
    if(router.query.type === MODAL_TYPE.INCOME) {
      filterForm.setValue("operationType",  operationOptions[1]);
    } else if (router.query.type === MODAL_TYPE.OUTCOME) {
      filterForm.setValue("operationType",  operationOptions[2]);
    }
  }, [])

  return (
    <WRAPPER>
      <TableWrapper>
          <h3 className="title">Operatsiyalar</h3>
        <div className="top">
          <div className="statistika-wrap ">
            <div className="card">
              <h5>Statistika</h5>
              <div className="wrapper">
                <div className="uzs-statistika">
                  <div className="left">
                    <div className="icon">
                      <CardSvg/>
                    </div>
                    <div className="bot">
                    <span>
                      {operations.outcomesSum ?
                          (+operations?.outcomesSum).toLocaleString().replaceAll(',', ' ')
                          : "0"}
                    </span>
                      <p>Chiqimlar(UZS)</p>
                    </div>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <DollarSvg/>
                    </div>
                    <div className="bot">
                    <span>
                      {operations.incomesSum ?
                          (+operations?.incomesSum).toLocaleString().replaceAll(',', ' ')
                          : "0"}
                    </span>
                      <p>Kirimlar(UZS)</p>
                    </div>
                  </div>

                  <div className="right2">
                    <div className="icon">
                      <DollarSvg2/>
                    </div>
                    <div className="bot">
                      <span>{(+(operations?.incomesSum+operations?.outcomesSum) ).toLocaleString().replaceAll(',', ' ')}</span>
                      <p>Qoldiq(UZS)</p>
                    </div>
                  </div>
                </div>

                <div className="usd-statistika">
                  <div className="left">
                    <div className="icon">
                      <CardSvg/>
                    </div>
                    <div className="bot">
                    <span>
                      {operations.outcomeSumInUSD ?
                          (+operations?.outcomeSumInUSD).toLocaleString().replaceAll(',', ' ')
                          : "0"}
                    </span>
                      <p>Chiqimlar(USD)</p>
                    </div>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <DollarSvg/>
                    </div>
                    <div className="bot">
                    <span>
                      {operations.incomeSumInUSD ?
                          (+operations?.incomeSumInUSD).toLocaleString().replaceAll(',', ' ')
                          : "0"}
                    </span>
                      <p>Kirimlar(USD)</p>
                    </div>
                  </div>

                  <div className="right2">
                    <div className="icon">
                      <DollarSvg2/>
                    </div>
                    <div className="bot">
                      <span>{(+(operations?.incomeSumInUSD+operations?.outcomeSumInUSD) ).toLocaleString().replaceAll(',', ' ')}</span>
                      <p>Qoldiq(USD)</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
          <form className="filter-content" onSubmit={onFilterSubmit}>
              <div className="row">
                <div className="mb-3 col-3">
                  <div>Proyekt</div>
                  <Controller
                    control={filterForm.control}
                    name="project"
                    render={({
                               field: {onChange, onBlur, value, name, ref},
                               fieldState: {invalid, isTouched, isDirty, error},
                               formState,
                             }) => (
                      <Select
                        value={value}
                        options={filterProjectOptions}
                        onBlur={onBlur}
                        onChange={onChange}
                        ref={ref}
                      />
                    )}
                  />
                </div>
                <div className="mb-3 col-3">
                  <div>Artikl</div>
                  <Controller
                    control={filterForm.control}
                    name="article"
                    render={({
                               field: {onChange, onBlur, value, name, ref},
                               fieldState: {invalid, isTouched, isDirty, error},
                               formState,
                             }) => (
                      <Select
                        value={value}
                        options={filterArticleOptions}
                        onBlur={onBlur}
                        onChange={onChange}
                        ref={ref}
                      />
                    )}
                  />
                </div>
                <div className="mb-3 col-3">
                  <div>Operatsiya turi</div>
                  <Controller
                      control={filterForm.control}
                      name="operationType"
                      render={({
                                 field: {onChange, onBlur, value, name, ref},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                               }) => (
                          <Select
                              value={value}
                              options={operationOptions}
                              onBlur={onBlur}
                              onChange={onChange}
                              ref={ref}
                          />
                      )}
                  />
                </div>
                <div className="mb-3 col-3">
                  <div>Valyuta turi</div>
                  <Controller
                      control={filterForm.control}
                      name="currency"
                      render={({
                                 field: {onChange, onBlur, value, name, ref},
                                 fieldState: {invalid, isTouched, isDirty, error},
                                 formState,
                               }) => (
                          <Select
                              value={value}
                              options={currencyOptions}
                              onBlur={onBlur}
                              onChange={onChange}
                              ref={ref}
                          />
                      )}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-3">
                  <div>Boshlanish sana</div>
                  <input className="form-control" type="date" {...filterForm.register("startDate")}/>
                </div>
                <div className="mb-3 col-3">
                  <div>Oxirgi sana</div>
                  <input className="form-control" type="date" {...filterForm.register("endDate")}/>
                </div>
                <div className="d-flex gap-2 col-6 mt-2">
                  <div className="row align-items-center col-12">
                    <button className="btn btn-secondary col-4" type="button" onClick={onFilterClear}>Bekor qilish</button>
                    <div className="modal-wrapper d-flex col-8">
                      <Button
                          className="col-6"
                          variant="contained"
                          onClick={() => openModal(MODAL_TYPE.INCOME)}
                          style={{
                            fontFamily: "Inter",
                            color: "#fff",
                            background: "#92C146",
                          }}
                      >
                        + Kirim qo'shsh
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                      <Button
                          className="col-6"
                          variant="contained"
                          onClick={() => openModal(MODAL_TYPE.OUTCOME)}
                          style={{
                            fontFamily: "Inter",
                            color: "#fff",
                            background: "#CA021D",
                          }}
                      >
                        - Chiqim qo'shish
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>

        <table className="table table-borderless table-hover" >
          <thead>
          <tr>
            <th style={{minWidth: "15%"}} className="col">
              Sana
            </th>
            <th style={{minWidth: "20%"}} className="col">
              Loyiha nomi
            </th>
            <th style={{minWidth: "15%"}} className="col">
              Qiymati
            </th>
            <th style={{minWidth: "25%"}} className="col">
              Izoh
            </th>
            <th style={{minWidth: "15%", justifyContent:"center"}} className="col">
              Artikl
            </th>
            <th style={{minWidth: "10%"}} className="col">
              Amallar
            </th>
          </tr>
          </thead>
          <tbody>
          {!operationLoading ? (
            operations?.data?.length ? (
              operDel?.map((obj, index) => (
                <tr key={index}>
                  <td style={{minWidth: "15%"}} className="col">
                    {/*{(page-1)*20+index+1}.{new Date(obj.addedDate).toISOString().split('T')[0]}*/}
                    {/*{(page-1)*20+index+1}.{obj.addedDate}*/}

                    <span>&nbsp;</span>{pad(new Date(obj.addedDate).getDate())  +
                        "-" +
                        pad((new Date(obj.addedDate).getMonth() + 1)) +
                        "-" +
                        new Date(obj.addedDate).getFullYear()}
                  </td>
                  <td style={{minWidth: "20%"}} className="col">
                    {obj?.project?.title}
                  </td>
                  <td style={{minWidth: "15%", color: (obj.amount>0 ? "#92C146" : "#CA021D")}} className="col">
                    {(+obj.amount).toLocaleString().replaceAll(',', ' ')}<span>&nbsp;</span> <b >{obj.currency}</b>
                  </td>
                  <td style={{minWidth: "25%"}} className="col">
                    {obj?.description}
                  </td>
                  <td style={{minWidth: "15%"}} className="col">
                    <Chip
                        label={obj?.article?.title}
                        variant="outlined"
                        style={{
                          background: "rgb(253, 181, 40, 0.7)",
                          color: "#fff",
                          border: "none",
                          fontFamily:"Rubik",
                          fontSize:18
                        }}
                    />
                  </td>
                  <td style={{minWidth: "10%"}} className="col">
                    <div className="btns">
                      <IconButton
                        style={{background: "rgb(253, 181, 40, 0.12)"}}
                        onClick={() => handleDeleteOperation(obj.id)}
                      >
                        <DeleteIcon/>
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
                <h3 style={{color: "rgba(0, 0, 0, 0.7)"}}>
                  Operatsiyalar mavjud emas
                </h3>
              </div>
            )
          ) : (
            <MinLoader/>
          )}
          </tbody>
        </table>
        <Pagination
          onChange={(p) => {
            setPage(p)
          }}
          current={page}
          total={operations?.count}
          pageSize={20}
        />
      </TableWrapper>
      {/*-----------------------------------------*/}
      <Drawer
        anchor={"right"}
        open={isOpenModal}

        onClose={() => {
          onCloseModal();
        }}
      >
        <ModalHeader className="modal-header">
          <h2 className="title">{modalType === MODAL_TYPE.INCOME ? "Kirim" : "Chiqim"} qo'shish</h2>
          <button className="closeSvg" onClick={onCloseModal}>
            <CloseSvg/>
          </button>
        </ModalHeader>
        <div className="radio d-flex justify-content-center">
          <Radio.Group
              size="large"
              onChange={onChangeRadio}
              defaultValue="UZS"
              style={{
                marginTop: 16,
              }}
          >
            <Radio.Button value="UZS">UZS</Radio.Button>
            <Radio.Button value="USD">USD</Radio.Button>
          </Radio.Group>
        </div>
        <form className="p-3" style={{width:500}} onSubmit={onSubmitOperation}>
          <Controller
            control={control}
            name="projectId"
            render={({
                       field: {onChange, onBlur, value, name, ref},
                       fieldState: {invalid, isTouched, isDirty, error},
                       formState,
                     }) => (
              <Select
                value={value}
                placeholder="Proyektni tanlang"
                options={projectOptions}
                onBlur={onBlur}
                onChange={(v) => {
                  if (v.value === "ADD_PROJECT") {
                    handleOpenProjectDrawer();
                    onChange(value);
                    return;
                  }
                  onChange(v);
                }}
                ref={ref}
              />
            )}
          />
          <br/>
          <Controller
            control={control}
            name="articleId"
            render={({
                       field: {onChange, onBlur, value, name, ref},
                       fieldState: {invalid, isTouched, isDirty, error},
                       formState,
                     }) => (
              <Select
                value={value}
                placeholder="Artiklni tanlang"
                options={articleOptions}
                onBlur={onBlur}
                onChange={(v) => {
                  if (v.value === "ADD_ARTICLE") {
                    handleOpenArticleDrawer();
                    onChange(value);
                    return;
                  }
                  onChange(v);
                }}
                ref={ref}
              />
            )}
          />
          <br/>
          <input autoComplete="off" className="form-control" placeholder={"Izoh"} {...register("description", {required: true})}/>
          <br/>
          <input autoComplete="off" className="form-control" type="date" placeholder={"Sana"} {...register("date", {required: true})}/>
          <br/>
          {/*<input className="form-control" type="number"*/}
          {/*       placeholder={"Qiymati (summa)"} {...register("amount", {required: true})}/>*/}
          <NumericFormat
              className="form-control"
              value={+modalSum}
              placeholder={"Qiymati (summa)"}
              autoComplete="off"
              onValueChange={(e) => {
                console.log(e.floatValue);
                setModalSum(e.floatValue)
              }
              }
              allowLeadingZeros thousandSeparator=" "
              {...register("terminal", {required: false})}
          />
          <br/>
          <button type="submit" disabled={loading} className="btn btn-primary">Qo'shish {loading && <ButtonLoader/>}</button>
        </form>
      </Drawer>

      <Drawer
        anchor={"left"}
        open={isOpenArticleDrawer}
        onClose={() => {
          handleCloseArticleDrawer();
        }}
      >
        <ModalHeader className="modal-header">
          <h2 className="title">Artikl qo'shish</h2>
          <button className="closeSvg" onClick={handleCloseArticleDrawer}>
            <CloseSvg/>
          </button>
        </ModalHeader>
        <ModalContent>
          <form onSubmit={submitAddArticle} >
            <input className="form-control" placeholder="Artikl nomini kiriting" type="text" {...articleForm.register("title", {required: true})}/>
            <br/>
            <label className="form-control" style={{display: "flex", alignItems: "center"}}>
              <input style={{width: 20, height: 20}} type="checkbox" {...articleForm.register("isNegative")}/>
              &nbsp;&nbsp;&nbsp;
              <span>Agar artikl manfiy bo'lsa belgilang</span>
            </label>
            <br/>
            <br/>
            <button type="submit" className="btn btn-primary">Qo'shish</button>
          </form>
        </ModalContent>
      </Drawer>


      <Drawer
        anchor={"left"}
        open={isOpenProjectDrawer}
        onClose={() => {
          handleCloseProjectDrawer();
        }}
      >
        <ModalHeader className="modal-header">
          <h2 className="title">Loyiha qo'shish</h2>
          <button className="closeSvg" onClick={handleCloseProjectDrawer}>
            <CloseSvg/>
          </button>
        </ModalHeader>
        <ModalContent>
          <form onSubmit={projectForm.handleSubmit(submitAddProject)}>
            <input type="text" placeholder="Proyekt nomi" className="form-control" {...projectForm.register("title")}/>
            <br/>
            <button type="submit" className="btn btn-primary">Qo'shish</button>
          </form>
        </ModalContent>
      </Drawer>
    </WRAPPER>
  );
};

function pad(n){return n<10 ? '0'+n : n}

export default Main;
