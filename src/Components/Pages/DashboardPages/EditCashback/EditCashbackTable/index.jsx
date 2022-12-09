import React, {useEffect, useState} from 'react';
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import {Wrapper} from "./Style";
import {Select, Spin} from "antd";
import {useForm, Controller} from "react-hook-form";
import Message from "../../../../../utils/Message";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";

const EditCashbackTable = ({cashId}) => {
  const {register, setValue, handleSubmit, formState: {errors}, control, reset} = useForm();
  const [cash, setCash] = useState(null);
  const [cashName, setCashName] = useState("");
  const [carTypes, setCarTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    const body = {
      carType: values.carType,
      statusName: values.statusName,
      cashbackPercentage: +values.cashbackPercentage,
      initialPointsForStatus: +values.initialPointsForStatus,
      cashbackId: cashId
    }
    setLoading(true);
    CashbackProvider.addCashbackRule(body)
      .then(res => {
        setValue("statusName", "");
        setValue("cashbackPercentage", "");
        setValue("initialPointsForStatus", "");
        getCashObj();
        Message.success();
      }, err => {
        console.log(err);
        Message.error();
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function getCashObj() {
    CashbackProvider.getAllCashback()
      .then(res => {
        const cashObj = res.data.find(i => i.id === +cashId) || {};
        console.log(cashObj)
        setCash(cashObj);
        setCashName(cashObj.name);
      })
  }

  function getCarTypes() {
    CashbackProvider.getCarTypes()
      .then(({data}) => {
        setCarTypes(data.map(type => ({label: type, value: type})));
      })
  }

  const handleChangeCashName = (e) => {
    setCashName(e.target.value);
  }

  const handleDeleteCashRule = (id) => {
    setLoading(true);
    CashbackProvider.deleteCashbackRule(id)
      .then((res) => {
        console.log(res);
        Message.success();
        getCashObj();
      }, err => {
        console.log(err);
        Message.error();
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getCashObj();
    getCarTypes();
  }, [])

  return (
    <Spin spinning={loading}>
      <Wrapper>
        <h2 className="title">Qo'shish</h2>
        <div className="content">
          <h3 className="title">Qoidalar</h3>
          <hr/>
          <br/>

          <h5>Nomi <sup style={{color: "red"}}>*</sup></h5>
          <input className="input" value={cashName} onChange={handleChangeCashName}/>
          <hr/>

          <form id="addRuleForm" onSubmit={handleSubmit(onSubmit)}/>

          <table>
            <thead>
            <tr className="edit_row">
              <th>Avto turi</th>
              <th>Status</th>
              <th>Bonus foizi</th>
              <th>Boshlang'ich bal</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr className="edit_row">
              <td>
                <Controller
                  control={control}
                  name="carType"
                  render={({
                             field: {onChange, onBlur, value, name, ref},
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                           }) => (
                    <Select
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      options={carTypes}
                      className="select"
                      size={"large"}
                    />
                  )}
                />
              </td>
              <td>
                <input type="text" className="input" {...register("statusName")}/>
              </td>
              <td>
                <input type="number" className="input" {...register("cashbackPercentage")}/>
              </td>
              <td>
                <input type="number" className="input" {...register("initialPointsForStatus")}/>
              </td>
              <td>
                <button type="submit" className="add-btn" form="addRuleForm">Qo'shish</button>
              </td>
            </tr>
            {cash?.rules?.map(rule => (
              <tr key={rule.name} className="edit_row">
                <td>
                  {rule.carType.title}
                </td>
                <td>
                  {rule.statusName}
                </td>
                <td>
                  {rule.cashbackPercentage}%
                </td>
                <td>
                  {rule.initialPointsForStatus}
                </td>
                <td align="center">
                  <button className="delete-btn" onClick={() => handleDeleteCashRule(rule.id)}>
                    <DeleteSvg/>
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </Spin>
  );
};

export default EditCashbackTable;
