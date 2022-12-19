import '../styles/globals.scss'
import {UserContextProvider} from "../src/Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import Head from "next/head";
import Script from "next/script";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewLoader from "../src/Components/Common/NewLoader";
import GlobalProvider from "../src/Context/GlobalContext/Provider";
import {GlobalStyle} from "../styles/globalStyle";

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <GlobalProvider>
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
        <GlobalStyle/>
      </GlobalProvider>
    </>
  )
}

export default MyApp
