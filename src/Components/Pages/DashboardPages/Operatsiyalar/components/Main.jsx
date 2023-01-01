import React, {useEffect, useState} from 'react';
import {Button, Chip, Drawer, IconButton} from "@mui/material";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import EditIcon from "@mui/icons-material/Edit";
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
      endDate: values.endDate?.split("-").reverse().join("-")
    }
    setFilterState(obj);
    setIsFilterOpen(false);
  })



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


  // DRAWERDAGI FORMA SUBMIT HANDLERLARI
  const onSubmitOperation = handleSubmit((values) => {
    const body = {
      projectId: values.projectId?.value,
      articleId: values.articleId?.label,
      description: values.description,
      amount: +modalSum,
      date: values.date
    }

    console.log("body",body)

    if (modalType === MODAL_TYPE.INCOME) {
      OperationProvider.addIncome(body).then(res => {
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
      OperationProvider.addOutcome(body).then(res => {
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

  return (
    <WRAPPER>
      <TableWrapper>
        <div className="top">
          <h3 className="title">Operatsiyalar</h3>
          <div className="statistika">
            <div className="card">
              <h5>Statistika</h5>
              <div className="wrap">
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
                    <p>Chiqimlar</p>
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
                    <p>Kirimlar</p>
                  </div>
                </div>

                <div className="right2">
                  <div className="icon">
                    <DollarSvg2/>
                  </div>
                  <div className="bot">
                    <span>{(+(operations?.incomesSum+operations?.outcomesSum) ).toLocaleString().replaceAll(',', ' ')}</span>
                    <p>Qoldiq</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <FilterWrapper>
            <Button
              variant="contained"
              onClick={toggleFilter}
              style={{
                fontFamily: "Inter",
                color: "#fff",
                background: "#787EFF",
              }}
            >
              Filtrlash
            </Button>
            <form className="filter-content" style={{visibility: isFilterOpen ? "visible" : "hidden"}} onSubmit={onFilterSubmit}>
              <div className="row">
                <div className="mb-3 col-6">
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
                <div className="mb-3 col-6">
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
              </div>
              <div className="row">
                <div className="mb-3 col-6">
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
              </div>
              <div className="row">
                <div className="mb-3 col-6">
                  <div>Boshlanish sana</div>
                  <input className="form-control" type="date" {...filterForm.register("startDate")}/>
                </div>
                <div className="mb-3 col-6">
                  <div>Oxirgi sana</div>
                  <input className="form-control" type="date" {...filterForm.register("endDate")}/>
                </div>
              </div>


              <div className="d-flex gap-2">
                <button className="btn btn-secondary" type="button" onClick={onFilterClear}>Bekor qilish</button>
                <button className="btn btn-success" type="submit">Qo'llash</button>
              </div>
            </form>
          </FilterWrapper>
          <div className="modal-wrapper">
            <Button
                variant="contained"
                onClick={() => openModal(MODAL_TYPE.INCOME)}
                style={{
                  fontFamily: "Inter",
                  color: "#fff",
                  background: "#787EFF",
                }}
            >
              + Kirim qo'shsh
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
                variant="contained"
                onClick={() => openModal(MODAL_TYPE.OUTCOME)}
                style={{
                  fontFamily: "Inter",
                  color: "#fff",
                  background: "#787EFF",
                }}
            >
              - Chiqim qo'shish
            </Button>
          </div>
        </div>

        <table className="table table-borderless table-hover">
          <thead>
          <tr>
            <th style={{minWidth: "10%"}} className="col">
              Sana
            </th>
            <th style={{minWidth: "20%"}} className="col">
              Loyiha nomi
            </th>
            <th style={{minWidth: "15%"}} className="col">
              Qiymati
            </th>
            <th style={{minWidth: "30%"}} className="col">
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
                  <td style={{minWidth: "10%"}} className="col">
                    {(page-1)*20+index+1}.{new Date(obj.addedDate).toISOString().split('T')[0]}
                    {/*{(page-1)*20+index+1}.{obj.addedDate}*/}
                  </td>
                  <td style={{minWidth: "20%"}} className="col">
                    {obj?.project?.title}
                  </td>
                  <td style={{minWidth: "15%"}} className="col">
                    {obj.amount.toLocaleString().replaceAll(',', ' ')}
                  </td>
                  <td style={{minWidth: "30%"}} className="col">
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
          <input className="form-control" placeholder={"Izoh"} {...register("description", {required: true})}/>
          <br/>
          <input className="form-control" type="date" placeholder={"Sana"} {...register("date", {required: true})}/>
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
          <button type="submit" className="btn btn-primary">Qo'shish</button>
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

export default Main;
