import { Helmet } from 'react-helmet'
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import '../styles/custom-prism-theme-dark.css'

import Layout from '../Components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Adam Berkowitz, Web Developer"
        description="Adam Berkowitz is a web developer based in West Hartford Connecticut"
        meta={[
          {
            name: 'description',
            content: 'Adam Berkowitz is a web developer based in West Hartford Connecticut'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { 
            property: 'og:title', 
            content: 'Adam Berkowitz, Web Developer' 
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:image',
            content: '/headshot.jpg'
          },
          {
            property: 'twitter:card',
            content: 'summary'
          },
          {
            property: 'twitter:title',
            content: 'Adam Berkowitz, Web Developer'
          },
          {
            property: 'twitter:description',
            content: 'Adam Berkowitz is a web developer based in West Hartford Connecticut'
          },
          {
            property: 'twitter:image',
            content: '/headshot.jpg'
          }
        ]}
      >
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=IBM+Plex+Serif:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
