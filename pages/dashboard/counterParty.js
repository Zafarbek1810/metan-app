import Head from 'next/head'
import WithAuthComponent from "../../src/Components/Hocs/PrivateRoute";
import Kontragent from "../../src/Components/Pages/DashboardPages/Kontragent";


export default function Home() {
    return (
        <>
            <Head>
                <title>IMPERIYA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WithAuthComponent>
                <Kontragent/>
            </WithAuthComponent>
        </>
    )
}
