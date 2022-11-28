import React, {useEffect, useState} from 'react';
import {LoginPageWrapper} from "./LoginPage.style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../Context/UserContext";
import {useRouter} from "next/router";
import AuthProvider from "../../../Data/Providers/AuthProvider";

const LoginPage = () => {
  const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();
  const {isAuth, user: currentUser} = useContextSelector(UserContext, ctx => ctx.state)
  const loginContext = useContextSelector(UserContext, ctx => ctx.actions.login);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuth && currentUser) {
      switch (currentUser.role){
        case "MANAGER":{
          router.replace("/dashboard/table")
          break;
        }
      }
    }
  }, [isAuth, currentUser])


  const onSubmit = (values) => {
    const body = {username: values.name, password: values.password}
    setLoading(true);
    AuthProvider.login(body).then(({data}) => {
      localStorage.setItem("token", data.token);
      loginContext({isAuth: true});
    }).finally(() => {
      setLoading(false);
    })
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
              <button type="submit" className="loginBtn">
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