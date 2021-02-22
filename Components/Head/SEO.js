export default function SEO({ description, title, imageURL }) {

  const siteTitle = `Adam Berkowitz - ${title === '' ? 'Web Developer' : title}`
  return (
    <>
      <meta name="description" content={description} key="descritption" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:title" content={siteTitle} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Adam Berkowitz - Web Developer" key="siteName" />
      <meta property="twitter:card" content="summary" key="twitterCard" />
      <meta property="twitter:creator" content="adamjberkowitz" key="twitterCreator" />
      <meta property="twitter:title" content={siteTitle} key="twitterTitle" />
      <meta property="twitter:description" content={description} key="twitterDesc" />
      {
        imageURL !== undefined && (
          <>
            <meta property="twitter:image" content={imageURL} key="twitterImg" />
            <meta property="og:image" content={imageURL} key="image" />
          </>
        )
      }
    </>
  )
}