import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import '../styles/custom-prism-theme-dark.css'

import Layout from '../Components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
