import React, {useLayoutEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import UserContext from "./Context";

const Provider = ({children}) => {
  const [userData, setUserData] = useState({isAuth: false, user: null});
  const [actions] = useState({login, logout});

  function login() {
    const token = localStorage.getItem("token");
    const data = token && (jwtDecode(token) || null);
    setUserData({isAuth: true, user: {name: data.name, role: data.role, type: data.type}});
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

export default React.memo(Provider);
