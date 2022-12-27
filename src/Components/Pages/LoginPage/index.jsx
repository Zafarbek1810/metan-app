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
import Message from "../../../utils/Message";
import ButtonLoader from "../../Common/ButtonLoader";
import UserProvider from "../../../Data/Providers/UserProvider";
import LogoSvg from "../../Common/Svgs/LogoSvg";

const LoginPage = () => {
  const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();
  const {isAuth, user: currentUser} = useContextSelector(UserContext, ctx => ctx.state)
  const loginContext = useContextSelector(UserContext, ctx => ctx.actions.login);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser)
    if (isAuth && currentUser) {
      switch (currentUser.role) {
        case "SUPER_ADMIN": {
          router.replace("/dashboard/allBusines")
          break;
        }
      }
      switch (currentUser.role) {
        case "DIRECTOR": {
          router.replace("/dashboard/home")
          break;
        }
      }
      switch (currentUser.role) {
        case "CASHIER": {
          router.replace("/dashboard/cashbox")
          break;
        }
      }
    }
  }, [isAuth, currentUser])


  const onSubmit = (values) => {
    const body = {username: values.name, password: values.password}
    setLoading(true);
    AuthProvider.login(body).then(({data}) => {
      console.log("data", data)
      localStorage.setItem("token", data.accessToken);
      loginContext({isAuth: true});
    }).catch(err => {
      console.log(err.response)
      if (err?.response?.status === 401) {
        toast.error("Login yoki parol noto'g'ri!");
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <LoginPageWrapper>
      <Container>
        <div className="wrapper">
          <MyLink className="logo" to="/">
            <LogoSvg/>
          </MyLink>
          <div className="main">
            <h4>Kirish</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input">
                <label>Login</label>
                <input autoComplete="off" type="text" {...register("name", {required: true})}/>
              </div>
              <div className="input">
                <label>Parol</label>
                <input autoComplete="off" type="password" {...register("password", {required: true})}/>
              </div>
              <button disabled={loading} type="submit" className="loginBtn">
                Kirish
                {loading && <ButtonLoader/>}
              </button>
            </form>
          </div>
          <div className="created">
            <MyLink className="crlink" to="https://jdsystems.uz/" target="_blank">JDSystems </MyLink>tomonidan yaratildi
          </div>
        </div>
      </Container>
    </LoginPageWrapper>
  );
};

export default LoginPage;
