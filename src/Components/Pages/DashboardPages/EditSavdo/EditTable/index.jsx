import React, {useEffect, useState} from 'react';
import {EditTableWrapper} from "./EditTable.style";
import {Input, Select} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {useRouter} from "next/router";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {useForm} from "react-hook-form";

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


const EditTable = ({id}) => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const router = useRouter()
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const [cashiers, setCashiers] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    OutletProvider.getOneFullOutlet(id)
      .then(({data}) => {
        setValue("title", data.title);
        setCashiers(data.cashiers)
        setDirectors(data.directors)
      })
      .catch(err => {
        console.log(err);
        Message.serverError();
      })
  }, [])


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSave = () => {
  router.push("/dashboard/pos")
  }
  const handleCancel = () => {
    router.push("/dashboard/pos")
  }

  const optionskassir = cashiers.map((i)=>(
    {
      label: i.username,
      value: i.id
    }
  ))
  const optionsdirektor = directors.map((i)=>(
    {
      label: i.username,
      value: i.id
    }
  ))


  return (
    <EditTableWrapper>
      <form>
        <h5>Sozlamalar</h5>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="input">
              <label>Kassirlar</label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                onChange={handleChange}
                options={
                  optionskassir
                }
              />
            </div>
            <div className="input">
              <label>Ish boshqaruvchi</label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                onChange={handleChange}
                options={optionsdirektor}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label className="label">
                <span className="label-text">Savdo nuqtasi nomi</span>
                <input
                  type="text"
                  style={{width:"100%", borderRadius:"6px", borderColor:"#d9d9d9"}}
                  {...register("title", {required: true})}
                />
              </label>
            </div>
            <div className="input">
              <label>Telefon</label>
              <Input
                style={{
                  width: '100%',
                }}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>Manzil</label>
              <Input
                style={{
                  width: '100%',
                }}
              />
            </div>
            <div className="input">
              <label>Hudud</label>
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
            </div>
            <div className="input">
              <label>Tuman</label>
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
            </div>

          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12 mt-5 ms-auto">
          <div className="btns">
            <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish</button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>Saqlash</button>
          </div>
        </div>
      </form>
    </EditTableWrapper>
  );
};

export default EditTable;