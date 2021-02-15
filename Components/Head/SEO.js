import { Children } from "react"

export default function SEO({ description, title }) {

  const siteTitle = `Adam Berkowitz - ${title === '' ? 'Web Developer' : title}`
  
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Adam Berkowitz - Web Developer" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="adamjberkowitz" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
    </>
  )
}