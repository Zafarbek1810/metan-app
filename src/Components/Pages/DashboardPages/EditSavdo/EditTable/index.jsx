import React, {useEffect, useState} from 'react';
import {EditTableWrapper} from "./EditTable.style";
import {Alert, Input, Select, Space, Spin} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {useRouter} from "next/router";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {useForm, Controller} from "react-hook-form";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import Modal from "react-modal";
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {toast} from "react-toastify";

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
  const [cashback, setCashback]=useState([])
  const [cassirId, setcassirId] = useState(null)
  const [directorId, setDirectorId] = useState(null)
  const [keshbekId, setKeshbekId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [spinLoading1, setSpinLoading1] = useState(false)
  const [spinLoading2, setSpinLoading2] = useState(false)
  const [spinLoading3, setSpinLoading3] = useState(false)

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
    CashbackProvider.getAllCashback()
      .then(res=>{
        console.log('cashback', res)
        setCashback(res.data)
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
  const optionCashback = cashback.map((i)=>(
    {
      label: i.name,
      value: i.id
    }
  ))

  useEffect(() => {
    OutletProvider.getOneFullOutlet(id)
      .then(({data}) => {
        setValue("title", data.title);
        setValue("location", data.location);
        setValue("price1", data.price1);
        setValue("price2", data.price2);
        setValue("loss", data.loss);
        setValue("defaultCashbackValue", data.defaultCashbackValue);
        setValue("description", data.description);
        setSavoNuqta(data)
        console.log("ful data",data)
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
    setSpinLoading1(true)
    try {
      const {data} = await OutletProvider.addCashierOutlet(body);
      console.log(data)
      toast.success("Kassir savdo nuqtasiga biriktirildi")
      setForRender(Math.random());
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setSpinLoading1(false)
  }
  const addDirector = async () => {
    const body = {
      adminId: directorId,
      outletId: id
    }
    console.log(body)
    setSpinLoading2(true)
    try {
      const {data} = await OutletProvider.addDirektorOutlet(body);
      console.log(data)
      toast.success("Direktor savdo nuqtasiga biriktirildi")
      setForRender(Math.random());
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setSpinLoading2(false)
  }

  const addCashback = async () => {
    const body = {
      cashbackId: +keshbekId,
      outletId: id
    }
    console.log(body)
    setSpinLoading3(true)
    try {
      const {data} = await OutletProvider.addCashbackOutlet(body);
      console.log(data)
      toast.success("Keshbek savdo nuqtasiga muvaffaqaiyatli biriktirildi!")
      setForRender(Math.random());
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setSpinLoading3(false)
  }



  const handleCassirId = (value) => {
    setcassirId(value)
    console.log(value)
  }
  const handleDirectorId = (value) => {
    setDirectorId(value)
    console.log(value)
  }
  const handleCashback = (value) => {
    setKeshbekId(value)
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
        const body = {
          adminId: +cashid,
          outletId: +id
        }
        await OutletProvider.deleteCashierOutlet(body)
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
  const removeCashback = async (keshId) => {
    RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(async () => {
        const body = {
          cashbackId: keshId,
          outletId: id
        }
        await OutletProvider.deleteCashbackOutlet(body)
        setSavoNuqta(pre => ({
          ...pre, cashback: cashback.filter(cash => cash.id !== keshId)
        }))
        // setSavoNuqta(...pre, cashback:cashback.filter(cash => cash.id !== keshId))
        toast.success("Keshbek olib tashlandi")
        setForRender(Math.random());
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onSubmit = async (values) => {
    const body = {}
    body.id = id
    body.isOpen = true
    body.isActive = true
    body.title = values.title;
    body.location = values.location
    body.price1 = +values.price1
    body.price2 = +values.price2
    body.loss = +values.loss
    body.defaultCashbackValue = values.defaultCashbackValue
    body.description = values.description
    setLoading(true)
    try {
      const {data} = await OutletProvider.updateOutlet(body);
      console.log("data",data)
      toast.success("Muvaffaqiyatli bajarildi!")
      handleSave()
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setLoading(false)
  }

  return (
    <EditTableWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Sozlamalar</h5>
        <div className="row">
          <div className="col-md-4 col-12 mb-5">
            <div className="input">
              <label className="label">
                <span className="label-text">Savdo nuqtasi nomi</span>
                <input
                  type="text"
                  style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                  {...register("title", {required: false})}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <span>Manzil</span>
                <input
                  type="text"
                  style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                  {...register("location", {required: false})}
                />
              </label>
            </div>
            <div className="d-flex">
              <div className="input w-50 me-1">
                <label>
                  <span>Narx1</span>
                  <input
                      type="text"
                      style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                      {...register("price1", {required: true})}
                  />
                </label>
              </div>
              <div className="input w-50 ms-1">
                <label>
                  <span>Narx2</span>
                  <input
                      type="text"
                      style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                      {...register("price2", {required: true})}
                  />
                </label>
              </div>
            </div>
            <div className="d-flex">
              <div className="input w-50 me-1">
                <label>
                  <span>Yo'qotish</span>
                  <input
                      type="text"
                      style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                      {...register("loss", {required: true})}
                  />
                </label>
              </div>
              <div className="input w-50 ms-1">
                <label>
                  <span>Keshbek</span>
                  <input
                      type="text"
                      style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                      {...register("defaultCashbackValue", {required: false})}
                  />
                </label>
              </div>
            </div>
            <div className="input">
              <label>
                <span>Shahobcha haqida</span>
                <textarea
                    type="text"
                    style={{width: "100%", borderRadius: "6px", borderColor: "#d9d9d9"}}
                    {...register("description", {required: false})}
                />
              </label>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-5">
            <img style={{width:"100%", height:"100%"}} src="/img/metan.png" alt=""/>
          </div>
          <div className="col-md-4 col-12 mb-5">
            <YMap/>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>
                <span style={{fontFamily:"Inter"}}>Kassirlar</span>
                <Select
                  size="large"
                  // mode="multiple"
                  allowClear
                  style={{
                    width: '90%',
                  }}
                  placeholder="Tanlang"
                  options={
                    optionskassir
                  }
                  value={cassirId}
                  onChange={handleCassirId}
                />
              </label>
              <button onClick={addCashier} type="button" style={{fontFamily:"Inter"}} className="btn btn-primary" disabled={spinLoading1}>Qo'shish{spinLoading1 && <ButtonLoader/>}</button>
            </div>
            <div className="box">
              <Spin spinning={spinLoading1} style={{marginTop: 100}}>
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
              </Spin>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>
                <span style={{fontFamily:"Inter"}}>Ish boshqaruvchi</span>
                <Select
                  size="large"
                  // mode="multiple"
                  allowClear
                  style={{
                    width: '90%',
                  }}
                  placeholder="Tanlang"
                  options={
                    optionsdirektor
                  }
                  onChange={handleDirectorId}

                  value={directorId}
                />
              </label>
              <button onClick={addDirector} type="button" style={{fontFamily:"Inter"}} className="btn btn-primary" disabled={spinLoading2}>Qo'shish {spinLoading2 && <ButtonLoader/>}</button>
            </div>
            <div className="box">
              <Spin spinning={spinLoading2} style={{marginTop: 100}}>
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
              </Spin>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>
                <span style={{fontFamily:"Inter"}}>Keshbek turi</span>
                <Select
                  size="large"
                  allowClear
                  style={{
                    width: '90%',
                  }}

                  options={optionCashback}
                  onChange={handleCashback}
                  value={keshbekId}
                />
              </label>
              <button onClick={addCashback} type="button" className="btn btn-primary" style={{fontFamily:"Inter"}} disabled={spinLoading3}>Qo'shish {spinLoading3 && <ButtonLoader/>}</button>
            </div>
            <Spin spinning={spinLoading3} style={{display:"flex"}}>
              {savdoNuqta?.cashback?<h3 className="keshbekTitle">Ishlayotgan keshbek: {savdoNuqta?.cashback?.name}</h3> :<h3 className="keshbekTitle">Keshbek ishlamayapdi</h3>}
              {savdoNuqta?.cashback?
                <button style={{background:"transparent", border:"none"}} type="button" onClick={() => removeCashback(savdoNuqta.cashback.id)}><DeleteSvg/></button>
                : <div></div>}
            </Spin>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12 mt-5 ms-auto">
          <div className="btns">
            <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish</button>
            <button type="submit" style={{display:"flex"}} className="btn btn-primary">Saqlash {loading && <ButtonLoader/>}</button>
          </div>
        </div>
      </form>
    </EditTableWrapper>
  );
};

export default EditTable;


import { Component } from 'react'
import { YMaps, Map, ZoomControl, FullscreenControl, SearchControl, GeolocationControl, Placemark } from "react-yandex-maps";

class YMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      mapState: {
        center: [40.051208, 64.883850],
        zoom: 9
      },
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.oldCoords !== this.props.oldCoords) {
      this.setState({ coords: this.props.oldCoords })
    }
  }

  onMapClick = (e) => {
    const coords = e.get("coords");
    this.setState({ coords: coords })
    console.log(coords)
  };

  render() {
    return (
        <div>
          <YMaps query={{ apikey: "" }}>
            <Map
                modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                onClick={this.onMapClick}
                state={this.state.mapState}
                width='100%'
                height='500px'
            >
              {this.state.coords ? <Placemark geometry={this.state.coords} /> : null}
              <ZoomControl />
              <FullscreenControl />
              <SearchControl />
              <GeolocationControl />
            </Map>
          </YMaps>
        </div>
    )
  }
}
