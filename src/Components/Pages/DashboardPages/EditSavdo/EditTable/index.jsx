import React, {useEffect, useState} from 'react';
import {EditTableWrapper} from "./EditTable.style";
import {Input, Select} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {useRouter} from "next/router";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {useForm, Controller} from "react-hook-form";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import Modal from "react-modal";
import axios from "axios";

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

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

const EditTable = ({id, RefObj, setIsOpen}) => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const router = useRouter()
  const [modalIsOpen, setIsModalOpen] = React.useState(false);
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const [forRender, setForRender] = useState(null)
  const [cashiers, setCashiers] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [savdoNuqta, setSavoNuqta] = useState({})

  const [cassirId, setcassirId] = useState(null)
  const [directorId, setDirectorId] = useState(null)

  useEffect(() => {
    UserProvider.getAllCashiers(0, 1000)
      .then(res => {
        console.log(res)
        setCashiers(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
    UserProvider.getAllDirectors(0, 1000)
      .then(res => {
        console.log(res)
        setDirectors(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })

  }, [])


  const handleSave = () => {
    router.push("/dashboard/pos")
  }
  const handleCancel = () => {
    router.push("/dashboard/pos")
  }

  const optionskassir = cashiers.map((i) => (
    {
      label: i.fullName,
      value: i.id
    }
  ))
  const optionsdirektor = directors.map((i) => (
    {
      label: i.fullName,
      value: i.id
    }
  ))

  useEffect(() => {
    OutletProvider.getOneFullOutlet(id)
      .then(({data}) => {
        setValue("title", data.title);
        setSavoNuqta(data)
        console.log(data)
        // setCashiers(data.cashiers)
        // setDirectors(data.directors)
      })
      .catch(err => {
        console.log(err);
        Message.serverError();
      })
  }, [forRender])

  const addCashier = async () => {
    const body = {
      adminId: +cassirId,
      outletId: +id
    }
    console.log(body)

    try {
      const {data} = await OutletProvider.addCashierOutlet(body);
      console.log(data)
      setForRender(Math.random());
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
  }

  const addDirector = async () => {
    const body = {
      adminId: directorId,
      outletId: id
    }
    console.log(body)

    try {
      const {data} = await OutletProvider.addDirektorOutlet(body);
      console.log(data)
      setForRender(Math.random());
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
  }

  const handleCassirId = (value) => {
    setcassirId(value)
    console.log(value)
  }
  const handleDirectorId = (value) => {
    setDirectorId(value)
    console.log(value)
  }

  const removeCashier = async (cashid) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(async () => {
        console.log(cashid)
        console.log(id)
        console.log(typeof cashid)
        console.log(typeof id)
        const body = {
          adminId: +cashid,
          outletId: +id
        }
        // await OutletProvider.deleteCashierOutlet(body)
        axios.delete("http://178.159.39.206:3000/outlet/removeCashier", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InphZmFyIiwidXNlcklkIjoxLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE2NzAzNDYwNDB9.hOKZgiuARpmlT7dohgpXqqlSBmB12XJVeOEYiMMme1Y"
          },
          data: body
        });

        setSavoNuqta(pre => ({
          ...pre, cashiers: pre.cashiers.filter(cash => cash.id !== cashid)
        }))
        console.log(savdoNuqta)
      })
      .catch((err) => {
        console.log(err);
        console.log(savdoNuqta.cashiers)
      })
  }
  const removeDirector = async (dirid) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(async () => {
        const body = {
          adminId: dirid,
          outletId: id
        }
        await OutletProvider.deleteDirektorOutlet(body)
        setSavoNuqta(pre => ({
          ...pre, directors: pre.directors.filter(dir => dir.id !== dirid)
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onSubmit = async (values) => {
    const body = {}
    body.title = values.title;

    try {
      const {data} = await OutletProvider.updateOutlet(body);
      console.log(data)
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
  }


  return (
    <EditTableWrapper>
      <form>
        <h5>Sozlamalar</h5>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="input">
              <label className="label">
                <span className="label-text">Savdo nuqtasi nomi</span>
                <input
                  type="text"
                  style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                  {...register("title", {required: true})}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <span>Telefon</span>
                <Input
                  style={{
                    width: '100%',
                  }}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <span>Manzil</span>
                <Input
                  style={{
                    width: '100%',
                  }}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <span>Hudud</span>
                <Select
                  defaultValue={provinceData[0]}
                  style={{
                    width: '100%',
                  }}
                  onChange={handleProvinceChange}
                  options={provinceData.map((province) => ({
                    label: province,
                    value: province,
                  }))}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <span>Tuman</span>
                <Select
                  style={{
                    width: '100%',
                  }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </label>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>
                <span>Kassirlar</span>
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: '100%',
                  }}
                  placeholder="Tanlang"
                  options={
                    optionskassir
                  }
                  value={cassirId}
                  onChange={handleCassirId}
                />
              </label>
              <button onClick={addCashier} type="button" className="btn btn-primary">Qo'shish</button>
            </div>
            <div className="box">
              <table>
                <tbody>
                {
                  savdoNuqta.cashiers?.map((obj, i) => (
                    <tr key={obj.id}>
                      <td style={{width: "15%"}}>{i + 1}</td>
                      <td style={{width: "70%"}}>{obj.fullName}</td>
                      <td style={{width: "15%"}}>
                        <button type="button" onClick={() => removeCashier(obj.id)}><DeleteSvg/></button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="input">
              <label>
                <span>Ish boshqaruvchi</span>
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: '100%',
                  }}
                  placeholder="Tanlang"
                  options={
                    optionsdirektor
                  }
                  onChange={handleDirectorId}
                  value={directorId}
                />
              </label>
              <button onClick={addDirector} type="button" className="btn btn-primary">Qo'shish</button>
            </div>
            <div className="box">
              <table>
                <tbody>
                {
                  savdoNuqta.directors?.map((obj, i) => (
                    <tr key={obj.id}>
                      <td style={{width: "15%"}}>{i + 1}</td>
                      <td style={{width: "70%"}}>{obj.fullName}</td>
                      <td style={{width: "15%"}}>
                        <button type="button" onClick={() => removeDirector(obj.id)}><DeleteSvg/></button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12 mt-5 ms-auto">
          <div className="btns">
            <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish</button>
            <button type="button" className="btn btn-primary">Saqlash</button>
          </div>
        </div>
      </form>
    </EditTableWrapper>
  );
};

export default EditTable;