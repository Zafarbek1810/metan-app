import Head from 'next/head'
import WithAuthComponent from "../../src/Components/Hocs/PrivateRoute";
import AllBusines from "../../src/Components/Pages/DashboardPages/AllBusines";


export default function Home() {
    return (
        <>
            <Head>
                <title>IMPERIYA</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <WithAuthComponent>
                <AllBusines/>
            </WithAuthComponent>
        </>
    )
}
