import Head from 'next/head'
import Keshbek from "../../src/Components/Pages/DashboardPages/Keshbek";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Keshbek/>
    </>
  )
}