import Document, { Html, Head, Main, NextScript } from 'next/document'

import SEO from '../Components/Head/SEO'

class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <SEO 
            description="Adam Berkowitz is a web developer based in West Hartford Connecticut" 
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=IBM+Plex+Serif:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PortfolioDocument