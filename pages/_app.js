import '../styles/globals.css'
import {UserContextProvider} from "../src/Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
