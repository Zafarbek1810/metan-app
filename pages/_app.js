import '../styles/globals.css'
import {UserContextProvider} from "../src/Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    )
  }
}

export default MyApp
