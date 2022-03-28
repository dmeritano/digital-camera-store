import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, pageName, cameraHeader }) => {
  return (
    <>
      <Head>
        <title>DC Store - {pageName}</title>
        <meta name="description" content="DC Store - Digital Cameras" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header cameraHeader={cameraHeader} />
      
      {children}

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  cameraHeader : null
}

export default Layout
