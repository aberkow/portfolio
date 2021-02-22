export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap">
        <div className="mb-8">
          <p>Built with:</p>
          <ul className="list-disc">
            <li>
              <a href="https://contentful.com">Contentful CMS</a>
            </li>
            <li>
              <a href="https://nextjs.com">NextJS</a>
            </li>
            <li>
              <a href="https://sendgrid.com">SendGrid</a>
            </li>
            <li>
              <a href="https://unsplash.com">Unsplash</a>
            </li>
            <li>
              <a href="https://vercel.com">Vercel</a>
            </li>
          </ul>
        </div>
        <div className="md:mx-8">
          <p>Say hello!</p>
          <ul className="list-disc">
            <li>
              <a href="mailto:adam@adamjberkowitz.com">Email</a>
            </li>
            <li>
              <a href="https://github.com/aberkow">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/adamjberkowitz">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}