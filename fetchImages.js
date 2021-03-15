const fs = require('fs')
const path = require('path')
const https = require('https')
const fetch = require('node-fetch')

require('dotenv').config()

const imagesDir = path.resolve('./public', 'post-images')

const makeRequest = async () => {
  const query = `
    {
      postFeaturedImageCollection (
        where: {
          featuredImage_exists: true
        }
      ) {
        items {
          featuredImage {
            fileName
            url
          }
        }
      }
    }
  `

  // it would be nice to use the contentfulQuery here, but for now this is ok
  return await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then(res => res.json()).catch(err => console.log({ err }) || err)
}

makeRequest().then(({ data }) => {
  const images = data.postFeaturedImageCollection.items

  images.forEach(image => {
    if (image.featuredImage !== null) {
      const filePath = path.join(imagesDir, image.featuredImage.fileName)

      const file = fs.createWriteStream(filePath)

      // get the image, send it to the directory, and log the result
      https.get(image.featuredImage.url, (res) => {
        res.pipe(file)
        res.on('end', () => console.log({ imageFetched: image.featuredImage.fileName }))
      }).on('error', (err) => console.error({ err }))
    }
  });

}).catch(err => console.log({ err }))