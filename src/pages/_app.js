import "../styles.css"
import Head from "next/head"
import { TopBar } from "../components/TopBar/TopBar"
import { Logotype } from "../components/Logotype/Logotype"
import "../styles.css"

export default function FuncSiteApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>Super fun site about functional programming and more</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&family=Roboto:wght@300;400&family=Trispace:wght@200;300;400&display=swap" rel="stylesheet" />
        </Head>
        <div className="container">
            <TopBar><Logotype /></TopBar>
            <Component {...pageProps} />
        </div>
    </>
}