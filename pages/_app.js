import '../styles/globals.css'
import {UserContextProvider} from "../src/Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useEffect, useState} from "react";
import Head from "next/head";
import Script from "next/script";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewLoader from "../src/Components/Common/NewLoader";

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <UserContextProvider>
        <Component {...pageProps} />
        {loading && <NewLoader/>}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </UserContextProvider>
    </>
  )
}

export default MyApp
