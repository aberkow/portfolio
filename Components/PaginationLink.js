import Link from 'next/link'

const PaginationLink = ({ href, children }) => (
  <div>
    <Link
      href={href}
    >
      { children }
    </Link>
  </div>
)

export default PaginationLink
