import Head from 'next/head'
import WithAuthComponent from "../../src/Components/Hocs/PrivateRoute";
import Kassa from "../../src/Components/Pages/DashboardPages/Kassa";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WithAuthComponent>
        <Kassa/>
      </WithAuthComponent>
    </>
  )
}