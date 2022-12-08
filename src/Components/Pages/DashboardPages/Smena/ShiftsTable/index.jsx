import React, {useEffect, useState} from 'react';
import {ShiftsTableWrapper} from "./ShiftsTable.style";
import {Button, Modal, Select} from 'antd';
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";



const ShiftsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [outletId, setoutletId] = useState(null)
  const [outlet, setOutlet] = useState([])


  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        console.log("outlet",res)
        setOutlet(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
  }, [])

  const optionExpense = outlet.map((i) => (
    {
      label: i.title,
      value: i.id
    }
  ))

  return (
    <ShiftsTableWrapper>
      <h3 className="title">Smena</h3>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Qo'shish"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={[
          <button className="btn btn-outline-warning" key="back" onClick={handleCancel}>
            Bekor qilish
          </button>,
          <button style={{marginLeft:"30px"}} className="btn btn-primary" key="submit" type="primary"  onClick={handleOk}>
            Saqlash
          </button>,

        ]}
      >
        <Select
          placeholder="Tanlang"
          allowClear
          style={{
            width: "100%",
            marginTop:"10px",
            marginBottom:"10px"
          }}
          onChange={handleChange}
          options={optionExpense}

        />
      </Modal>
    </ShiftsTableWrapper>
  );
};

export default ShiftsTable;