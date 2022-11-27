import React, {useState} from 'react';
import {LoginPageWrapper} from "./LoginPage.style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const LoginPage = () => {
  const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();
  const [loading, setLoading] = useState(false);


  const onSubmit =  () => {
    toast.error("yuborildi")
  }

  return (
    <LoginPageWrapper>
      <Container>
        <div className="wrapper">
          <MyLink className="logo" to="/">
            <span>LOGO</span>
          </MyLink>
          <div className="main">
            <h4>Кириш</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input">
                <label>Логин</label>
                <input type="text" {...register("name", {required: true})}/>
              </div>
              <div className="input">
                <label>Парол</label>
                <input type="password" {...register("password", {required: true})}/>
              </div>
              <button  type="submit" className="loginBtn">
                Кириш
              </button>
            </form>
          </div>
          <div className="created">
            <MyLink className="crlink" to="https://jdsystems.uz/" target="_blank">JDSystems </MyLink>томонидан яратилди
          </div>
        </div>
      </Container>
    </LoginPageWrapper>
  );
};

export default LoginPage;