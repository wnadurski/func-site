import '../styles.css'
import Head from 'next/head'
import { TopBar } from '../components/TopBar/TopBar'
import { Logotype } from '../components/Logotype/Logotype'
import { HamburgerButton } from '../components/Menu/Menu'
import { Drawer } from '../components/Drawer/Drawer'
import { useState } from 'react'

export default function FuncSiteApp({ Component, pageProps }) {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <Head>
        <title>Super fun site about functional programming and more</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&family=Roboto:wght@300;400&family=Trispace:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <TopBar>
          <HamburgerButton
            className="menu-button"
            onClick={() => console.log('Hello') || setShowDrawer(true)}
          />
          <Logotype />
        </TopBar>
        <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
        <Component {...pageProps} />
      </div>
    </>
  )
}
