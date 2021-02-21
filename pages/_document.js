import Document, { Html, Head, Main, NextScript } from 'next/document'

import SEO from '../Components/Head/SEO'

class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PortfolioDocument