import React, {useEffect, useRef, useState} from 'react';
import {FilterWrapper, GasColumnReportWrapper} from "./GasColumnReport.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Modal} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import Pagination from "rc-pagination";
import {Button, IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const GasColumnReport = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [forRender, setForRender] = useState([]);
  const [colsData, setColsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO
  const [] = useState(false);
  const [] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [editGazReport, setEditGazReport] = useState(null);

  const [outlets, setOutlets] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);

  const [gazCols, setGazCols] = useState([]);
  const [activeGazCol, setActiveGazCol] = useState(null);

  const [totalElements, setTotalElements] = useState(20)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };


  useEffect(() => {
    OutletProvider.getAllOutlets()
      .then(({data}) => {
        setOutlets(data.map(i => ({label: i.title, value: i.id})));
      }, err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    GasBallonsProvider.getGasColumsReports(currentPage - 1, 20, filterState)
      .then(({data}) => {
        console.log("dd",data.data)
        setColsData(data.data);
        setTotalElements(data.count)
      }, err => {
        console.log(err);
      })
  }, [filterState, forRender, currentPage])

  useEffect(() => {
    if (activeOutlet) {
      GasBallonsProvider.getGasColumsByOutlet(+activeOutlet)
        .then(({data}) => {
          setGazCols(data.map(i => ({label: i.name, value: i.id})));
        }, err => {
          console.log(err);
        })
    }
  }, [activeOutlet])

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const openEditModal = (obj) => {
    setEditGazReport(obj);
    setEditModal(true);
  }

  const handleEditModalCancel = () => {
    setEditModal(false);
  }

  const handleOutletFilter = (e) => {
    setActiveOutlet(e.target.value);
  }
  const handleGazColFilter = (e) => {
    setActiveGazCol(e.target.value);
  }

  const onFilterSubmit = () => {
    const startDate = startDateRef.current.value.split("-").reverse().join("-");
    const endDate = endDateRef.current.value.split("-").reverse().join("-");

    const body = {
      outletId: activeOutlet,
      gasColumnId: activeGazCol,
      startDate,
      endDate
    }

    setIsFilterOpen(false);
    setFilterState(body);
  }

  const onFilterClear = () => {
    setActiveOutlet(null);
    setActiveGazCol(null);
    setGazCols([]);
    startDateRef.current.value = "";
    endDateRef.current.value = "";
    setFilterState({});
    setIsFilterOpen(false);
  }

  return (
    <GasColumnReportWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar hisoboti</h3>
        <div className="modal-wrapper">
          {/*====MODAL====*/}
          <div className="modal-wrapper">
            <Button variant="contained" onClick={showModal}
                    style={{fontFamily: "Inter",color:"#fff", background:"#787EFF"}}>
              + Qo'shish
            </Button>
            <Modal
              title="Qo'shish"
              open={isModalOpen}
              onCancel={handleCancel}
              width={700}
              footer={[null]}
            >
              <ModalContent>
                <ReportModal renderParent={setForRender} handleCancel={handleCancel}/>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="filter">
        <FilterWrapper>
          <Button variant="contained" onClick={() => setIsFilterOpen(p => !p)}
                  style={{fontFamily: "Inter",color:"#fff", background:"#787EFF"}}>
            Filter
          </Button>
          <div className="filter-content" style={{visibility: isFilterOpen ? "visible" : "hidden"}}>
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select className="form-select" value={activeOutlet} onChange={handleOutletFilter}>
                  <option value="null" disabled>Tanlang</option>
                  {
                    outlets.map(out => (
                      <option value={out.value} key={out.value}>{out.label}</option>
                    ))
                  }
                </select>
              </div>
              <div className="select mb-3 col-6">
                <label className="form-label">Gaz kolonkalari</label>
                <select className="form-select" value={activeGazCol} onChange={handleGazColFilter}>
                  <option value="null" disabled>Tanlang</option>
                  {
                    gazCols.map(out => (
                      <option value={out.value} key={out.value}>{out.label}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Davr</label>
                <input autoComplete="off" ref={startDateRef} name="startDate" type="date" className="form-control"/>
              </div>
              <div className="mb-3 mt-2 col-6">
                <label className="form-label"></label>
                <input autoComplete="off" ref={endDateRef} name="endDate" type="date" className="form-control"/>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="btn btn-secondary" onClick={onFilterClear}>Bekor qilish</div>
              <div className="btn btn-success" onClick={onFilterSubmit}>Qo'llash</div>
            </div>
          </div>
        </FilterWrapper>
      </div>
      <div className="filter-state col-12">
        {
          !!Object.keys(filterState).length && <div className="filter-state__inner">
            <span>Filtrlangan</span>
            <button className="btn btn-secondary" onClick={onFilterClear}>O'chirish</button>
          </div>
        }
      </div>
      <table className="table table-borderless table-hover">
        <thead>
        <tr>
          <th style={{minWidth: "10%"}} className="col">Id</th>
          <th style={{minWidth: "15%"}} className="col">Nomi</th>
          <th style={{minWidth: "15%"}} className="col">Ko'rsatgich</th>
          <th style={{minWidth: "15%"}} className="col">Oxirgi ko'rsatgich</th>
          <th style={{minWidth: "15%"}} className="col">Farqi</th>
          <th style={{minWidth: "15%"}} className="col">Sana</th>
          <th style={{minWidth: "15%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          colsData.map((item, index) => (
            <tr key={item.id}>
              <td style={{minWidth: "10%"}} className="col">{(currentPage - 1) * 20 + index + 1}</td>
              <td style={{minWidth: "15%"}} className="col">{item.gasColumn.name}</td>
              <td style={{minWidth: "15%"}} className="col">{item.currentValue}</td>
              <td style={{minWidth: "15%"}} className="col">{item.lastValue}</td>
              <td style={{minWidth: "15%"}} className="col">{item.currentValue - item.lastValue}</td>
              <td style={{minWidth: "15%"}} className="col">{new Date(item.date).toISOString().split('T')[0]}</td>
              <td style={{minWidth: "15%"}} className="col">
                <div className="btns">
                  <IconButton style={{background:"rgb(253, 181, 40, 0.12)"}}
                              onClick={() => openEditModal(item)} >
                    <EditIcon />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
        pageSize={20}
      />
      <Modal
        title=""
        open={editModal}
        onCancel={handleEditModalCancel}
        width={700}
        footer={[null]}
      >
        <ModalContent>
          <table className="table ">
            <thead>
            <tr>
              <th>Nomi</th>
              <th>Ko'rsatgich</th>
              <th>Oxirgi ko'rsatgich</th>
              <th>Natija</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{editGazReport?.gasColumn.name}</td>
              <td><input autoComplete="off" type="text" className="form-control w-75"/></td>
              <td>{editGazReport?.lastValue}</td>
              <td>Natija</td>
            </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end gap-2 mb-2">
            <button type="button" className="btn btn-danger dropdown-toggle px-4" onClick={handleEditModalCancel}>Bekor
              qilish
            </button>
            <button type="button" className="btn btn-primary dropdown-toggle px-4">Tasdiqlayman</button>
          </div>
        </ModalContent>
      </Modal>
    </GasColumnReportWrapper>
  );
};

export default GasColumnReport;


function ReportModal({renderParent, handleCancel}) {
  const {register, handleSubmit, watch, reset} = useForm();
  const [outlets, setOutlets] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);
  const [cols, setCols] = useState([]);
  const [forRender, setForRender] = useState(123);
  let itogo=  0;

  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate())



  const [date, setDate] = useState(defaultDate)

  const onSetDate = (event) => {
    setDate(new Date(event.target.value))
    console.log("date",date.toLocaleDateString('en-CA'))
  }

  const onSubmit = (values) => {
    const body = {
      outletId: +activeOutlet,
      gasColumnReports: [],
      date: date.toLocaleDateString('en-GB',{timeZone: "UTC"}).replaceAll('/', '-')
    };
    cols.forEach(col => {
      body.gasColumnReports.push({
        gasColumnId: col.id,
        newValue: values[col.id + ""]
      })
    })

    GasBallonsProvider.addGasColumnReport(body)
      .then(res => {
        console.log(res);
        toast.success("Kolonka hisobotlari yuborildi");
        reset();
        handleCancel();
        setForRender(Math.random());
        renderParent(Math.random());
      }, err => {
        console.log(err);
        toast.error("Kutilmagan xatolik yuz berdi!");
      })
  }

  useEffect(() => {
    OutletProvider.getAllOutlets()
      .then(({data}) => {
        const opt = data.map(i => ({label: i.title, value: i.id}));
        setOutlets(opt);
        setActiveOutlet(opt[0]?.value)
      }, err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    if (activeOutlet) {
      GasBallonsProvider.getGasColumsByOutlet(+activeOutlet)
        .then(({data}) => {
          setCols(data);
        }, err => {
          console.log(err);
        })
    }
  }, [activeOutlet, forRender])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex w-75 gap-2">
        <input autoComplete="off" type="date" value={date.toLocaleDateString('en-CA', {timeZone: "UTC"})} onChange={onSetDate}/>
        <select className="form-control" value={activeOutlet} onChange={(e) => setActiveOutlet(e.target.value)}>
          {
            outlets.map(i => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))
          }
        </select>
      </div>

      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th className="col">Nomi</th>
          <th className="col">Ko'rsatgich</th>
          <th className="col">Oxirgi Ko'rsatgich</th>
          <th className="col">Jami</th>
        </tr>
        </thead>
        <tbody>
        {

          cols.map(item => <ReportTr watch={watch} register={register} item={item} key={item.id} foo={(temp, birinchi)=>{
            if(birinchi){
              itogo = 0;
              itogo+=temp;
            }else{
              itogo += +temp;
            }
            document.getElementById("jami").innerHTML = "Jami: " + itogo;
          }
          }/>)
        }
        </tbody>
        {
          cols.map(item => console.log(item))
        }
      </table>
     <span id="jami" style={{width:"100%", fontWeight:700, fontSize:20,textAlign:"center"}}></span>
      {/*<input name="searchTxt" disabled type="text" maxLength="512" id="jami" className="searchField"/>*/}

      <div className="d-flex gap-2 justify-content-end">
        <button className="btn btn-danger" type="button" onClick={() => handleCancel()}>Bekor qilish</button>
        <button className="btn btn-primary">Saqlash</button>
      </div>
    </form>
  )
}



function ReportTr({watch, register, item,foo}) {
  const jami = watch(item.id + "") ? watch(item.id + "") - item.lastValue : 0;
  //console.log(item) ;
  if(item.name === '1'){
    foo(jami, true);
  }else{
    foo(jami, false);
  }
  //console.log(itogo)

  // let itogo=jami + jami
  // console.log(itogo)

  return (
    <tr>
      <th className="col">{item?.name}</th>
      <th className="col">
        <input autoComplete="off" type="number" {...register(item.id + "")}/>
      </th>
      <th className="col">{item.lastValue}</th>
      <th className="col">{jami}</th>
    </tr>
  )
}
