import React, {useLayoutEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import UserContext from "./Context";

const Provider = ({children}) => {
  const [userData, setUserData] = useState({isAuth: false, user: null});
  const [actions] = useState({login, logout});

  function login(payload) {
    setUserData(payload);
  }

  function logout() {
    localStorage.removeItem("token");
    setUserData({isAuth: false, user: null});
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const data = token && (jwtDecode(token) || null);
      if (data) {
        setUserData({isAuth: true, user: data})
      }
    }
  }, [])


  return (
    <UserContext.Provider value={{
      state: userData,
      actions
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;