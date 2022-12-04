import React, {useEffect, useState} from 'react';
import {EditTableWrapper} from "./EditTable.style";
import {Input, Select} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {useRouter} from "next/router";

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


const EditTable = () => {
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
    UserProvider.getAllCashiers(0, 1000)
      .then(res => {
        console.log(res.data)
        setCashiers(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
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

  const options1 = cashiers.filter(cashier => cashier.username.id === cashiers.id)


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
                  options1
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
                options={cashiers}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="input">
              <label>Savdo nuqtasi nomi</label>
              <Input
                style={{
                  width: '100%',
                }}
              />
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