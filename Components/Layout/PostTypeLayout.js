import Image from 'next/image'

import ContentList from '../ContentList'
import { taxonomyListClasses } from '../../config'

export default function PostTypeLayout({ item, markdown, tags = [], taxonomyName = 'tags' }) {

  const hasTaxonomy = tags.length > 0 ? true : false
  const taxTitle = taxonomyName.charAt(0).toUpperCase() + taxonomyName.slice(1)

  return (
    <article className="content-container content-grid">
      <div className="content-title-container">
        <h1>{item.title}</h1>
      </div>
      {
        hasTaxonomy && (
          <div className="content-meta-container hidden md:block">
            <p>{taxTitle}:</p>
            <ContentList
              items={tags}
              basePath={`/${taxonomyName}`}
              classes={taxonomyListClasses}
            />
          </div>
        )
      }
      <div className="post-content max-w-prose" dangerouslySetInnerHTML={{ __html: markdown }}></div>
      {
        item.featuredImageReference && (
          <div className="content-image hidden lg:block sticky top-16 mt-8">
            <Image
              src={item.featuredImageReference.featuredImage.url}
              alt={item.featuredImageReference.altText}
              layout="responsive"
              height={item.featuredImageReference.featuredImage.height / 10}
              width={item.featuredImageReference.featuredImage.width / 10}
            />
            <div className="mt-4">
              <p>Image by: <a href={item.featuredImageReference.imageCreditLink}>
                {item.featuredImageReference.imageCredit}
              </a>
              </p>
            </div>
          </div>
        )
      }
    </article>
  )
}