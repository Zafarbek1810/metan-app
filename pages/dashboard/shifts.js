import Head from 'next/head'
import Smena from "../../src/Components/Pages/DashboardPages/Smena";
import WithAuthComponent from "../../src/Components/Hocs/PrivateRoute";


export default function Home() {
  return (
    <>
      <Head>
        <title>IMPERIYA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithAuthComponent>
        <Smena/>
      </WithAuthComponent>
    </>
  )
}
