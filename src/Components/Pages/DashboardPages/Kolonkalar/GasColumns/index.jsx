import React, {useEffect, useState} from 'react';
import {GasColumnsWrapper} from "./GasColumns.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Modal, Select} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";
import Pagination from "rc-pagination";


const GasColumns = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const [outletId, setoutletId] = useState(null)
  const [outlet, setOutlet] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [forRender, setForRender] = useState(null)
  const [ballons, setBallons] = useState([])

  const [editingColumn, setEditingColumn] = useState(null)

  const [totalElements, setTotalElements]=useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };


  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        setOutlet(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
  }, [])

  useEffect(() => {
    setLoading2(true);
    GasBallonsProvider.getGasColums(currentPage-1, 10)
      .then(({data}) => {
        setBallons(data.data)
        setTotalElements(data.count)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender, currentPage])


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setValue("name", "")
  };
  const optionExpense = outlet.map((i) => (
    {
      label: i.title,
      value: i.id
    }
  ))
  const handleEdit = (obj) => {
    setEditingColumn(obj)
    setIsModalOpen(true)
  }

  const handleOutletId = (value) => {
    setoutletId(value)
    console.log("setoutletId", value)
  }

  const onSubmit = async (values) => {
    const body = {}
    body.outletId = +outletId
    body.name = values.name;

    setLoading(true)
    if(editingColumn){
      try {
        body.gasColumnId=editingColumn.id
        body.newOutletId = +outletId
        const {data} = await GasBallonsProvider.editGasColumn(body);
        console.log(data)
        setForRender(Math.random());
        toast.success("Muvaffaqiyatli o'zgartirildi!")
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }else{
      try {
        const {data} = await GasBallonsProvider.addGasColumn(body);
        console.log(data)
        setForRender(Math.random());
        toast.success("Qo'shildi!")
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }

    setLoading(false)
  }

  useEffect(()=>{
    if(editingColumn){
      setValue("name", editingColumn.name)
      setValue("outlet", editingColumn.gasColumnId)
    }
  }, [isModalOpen])


  return (
    <GasColumnsWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar</h3>
        <div className="modal-wrapper">
          {/*====MODAL====*/}
          <div className="modal-wrapper">
            <button className="btn btn-primary" style={{fontFamily:"Inter"}} onClick={showModal}>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                    <span className="label-text">Savdo nuqtalari</span>
                    <Select
                      placeholder="Tanlang"
                      size="large"
                      allowClear
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                      onChange={handleOutletId}
                      options={optionExpense}
                      value={outletId}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text">Nomi</span>
                    {errors.name && (
                      <span className="err-text">Majburiy maydon</span>
                    )}
                    <input
                      type="text"
                      {...register("name", {required: true})}
                    />
                  </label>
                  <div className="btns">
                    <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>Saqlash {loading &&
                    <ButtonLoader/>}</button>
                  </div>
                </form>
              </ModalContent>
            </Modal>
          </div>
        </div>

      </div>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "30%"}} className="col">Nomi</th>
          <th style={{width: "30%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "30%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            ballons.length
              ? ballons.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{width: "30%"}} className="col">{index+1}. {obj.name}</td>
                  <td style={{width: "30%"}} className="col">{obj.outlet.title}</td>
                  <td style={{width: "30%"}} className="col">
                    <div className="btns">
                      <button onClick={() => handleEdit(obj)}>
                        <EditSvg/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              : <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3>Gaz ballon mavjud emas!</h3></div>
            : <MinLoader/>
        }


        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
      />
    </GasColumnsWrapper>
  );
};

export default GasColumns;