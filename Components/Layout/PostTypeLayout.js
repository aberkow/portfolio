import Image from 'next/image'

import ContentList from '../ContentList'
import { taxonomyListClasses } from '../../config'

export default function PostTypeLayout({ item, markdown, tags }) {
  return (
    <div className="content-container content-grid">
      <div className="content-title-container">
        <h1>{item.title}</h1>
      </div>
      {
        tags && (
          <div className="content-meta-container hidden md:block">
            <p>Tags:</p>
            <ContentList
              items={tags}
              basePath={`/tags`}
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
    </div>
  )
}