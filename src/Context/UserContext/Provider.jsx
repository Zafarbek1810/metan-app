import React, {useLayoutEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import UserContext from "./Context";
import UserProvider from "../../Data/Providers/UserProvider";

const Provider = ({children}) => {
  const [userData, setUserData] = useState({isAuth: false, user: null});
  const [actions] = useState({login, logout});
  const [isDoneUserChecking, setIsDoneUserChecking] = useState(false)

  function login() {
    UserProvider.getMe()
      .then(({data}) => {
        setUserData({isAuth: true, user: data});
      })
  }

  function logout() {
    localStorage.removeItem("token");
    setUserData({isAuth: false, user: null});
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      UserProvider.getMe()
        .then(({data}) => {
          setUserData({isAuth: true, user: data})
        }).catch(err=>{
          console.log(err)
      }).finally(()=>{
          setIsDoneUserChecking(true)
      })
    }
  }, [])


  return (
    <UserContext.Provider value={{
      state: userData,
      actions,
      isDoneUserChecking
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default React.memo(Provider);
