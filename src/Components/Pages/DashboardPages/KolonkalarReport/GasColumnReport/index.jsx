import React, {useEffect, useState} from 'react';
import {GasColumnReportWrapper} from "./GasColumnReport.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Modal} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import {useForm} from "react-hook-form";

const GasColumnReport = () => {
  const [colsData, setColsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [] = useState(false);
  const [] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [editGazReport, setEditGazReport] = useState(null);

  const [outlets, setOutlets] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);

  const [gazCols, setGazCols] = useState([]);
  const [activeGazCol, setActiveGazCol] = useState(null);

  useEffect(() => {

  }, [])

  useEffect(() => {
    OutletProvider.getAllOutlets()
      .then(({data}) => {
        setOutlets(data.map(i => ({label: i.title, value: i.id})));
      }, err => {
        console.log(err);
      })
    GasBallonsProvider.getGasColums()
      .then(({data}) => {
        setColsData(data);
      }, err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    console.log(activeOutlet)
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

  return (
    <GasColumnReportWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar hisoboti</h3>
        <div className="modal-wrapper">
          {/*====MODAL====*/}
          <div className="modal-wrapper">
            <button className="btn btn-primary" onClick={showModal}>
              + Qo'shish
            </button>
            <Modal
              title="Qo'shish"
              open={isModalOpen}
              onCancel={handleCancel}
              width={700}
              footer={[null]}
            >
              <ModalContent>
                <ReportModal/>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="col-3">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle px-4" data-bs-toggle="dropdown"
                  aria-expanded="false" data-bs-auto-close="outside">
            Filter
          </button>
          <form className="dropdown-menu p-3 col-6">
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select className="form-select" value={activeOutlet} onChange={handleOutletFilter}>
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
                <input type="date" className="form-control"/>
              </div>
              <div className="mb-3 mt-2 col-6">
                <label className="form-label"></label>
                <input type="date" className="form-control"/>
              </div>
            </div>

            <div className="btns">
              <button className="btn btn-secondary">Bekor qilish</button>
              <button className="btn btn-success">Qo'llash</button>
            </div>
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "15%"}} className="row">ID</th>
          <th style={{width: "15%"}} className="col">Ko'rsatgich</th>
          <th style={{width: "15%"}} className="col">Oxirgi ko'rsatgich</th>
          <th style={{width: "15%"}} className="col">Farqi</th>
          <th style={{width: "15%"}} className="col">Sana</th>
          <th style={{width: "15%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          colsData.map((item, index) => (
            <tr key={item.id}>
              <td style={{width: "15%"}} className="row">{index + 1}.{item.name}</td>
              <td style={{width: "15%"}} className="col">{item.lastValue}</td>
              <td style={{width: "15%"}} className="col">{item.lastValue}</td>
              <td style={{width: "15%"}} className="col">0</td>
              <td style={{width: "15%"}} className="col">30.11.2022</td>
              <td style={{width: "15%"}} className="col">
                <div className="btns">
                  <button onClick={() => openEditModal(item)}>
                    <EditSvg/>
                  </button>
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <Modal
        title=""
        open={editModal}
        onCancel={handleEditModalCancel}
        width={700}
        footer={[null]}
      >
        <ModalContent>
          <table className="table">
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
              <td>{editGazReport?.name}</td>
              <td><input type="text" className="form-control w-75"/></td>
              <td>Oxirgi ko'rsatgich</td>
              <td>Natija</td>
            </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end gap-2 mb-2">
            <button type="button" className="btn btn-danger dropdown-toggle px-4" onClick={handleEditModalCancel}>Bekor qilish</button>
            <button type="button" className="btn btn-primary dropdown-toggle px-4">Tasdiqlayman</button>
          </div>
        </ModalContent>
      </Modal>
    </GasColumnReportWrapper>
  );
};

export default GasColumnReport;


function ReportModal () {
  const {register, handleSubmit, watch} = useForm();
  const [outlets, setOutlets] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);
  const [cols, setCols] = useState([]);

  const onSubmit = (values) => {
    const body = {
      outletId: +activeOutlet,
      gasColumnReports: []
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
      }, err => {
        console.log(err);
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
  }, [activeOutlet])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex w-75 gap-2">
        <input type="date" className="form-control"/>
        <select className="form-control" value={activeOutlet} onChange={(e) => setActiveOutlet(e.target.value)}>
          {
            outlets.map(i => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))
          }
        </select>
      </div>

      <table className="table">
        <thead>
        <tr>
          <th>Nomi</th>
          <th>Ko'rsatgich</th>
          <th>Oxirgi Ko'rsatgich</th>
          <th>Jami</th>
        </tr>
        </thead>
        <tbody>
        {
          cols.map(item => <ReportTr watch={watch} register={register} item={item} key={item.id}/>)
        }
        </tbody>
      </table>

      <div className="d-flex gap-2 justify-content-end">
        <button className="btn btn-danger" type="button">Bekor qilish</button>
        <button className="btn btn-primary">Saqlash</button>
      </div>
    </form>
  )
}

function ReportTr ({watch, register, item}) {
  const jami = watch(item.id + "") ? watch(item.id + "") - item.lastValue : 0;

  return (
    <tr>
      <th>{item?.name}</th>
      <th>
        <input type="number" {...register(item.id + "")}/>
      </th>
      <th>{item.lastValue}</th>
      <th>{jami}</th>
    </tr>
  )
}
