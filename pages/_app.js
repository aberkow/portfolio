import Head from 'next/head'

import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import '../styles/custom-prism-theme-dark.css'

import SEO from '../Components/Head/SEO'
import Layout from '../Components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <SEO 
        description="Adam Berkowitz is a web developer based in West Hartford Connecticut" 
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=IBM+Plex+Serif:wght@700&display=swap" rel="stylesheet" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
