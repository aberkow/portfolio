import SkipNav from '../Head/SkipNav'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {

  return (
    <>
      <SkipNav />
      <div className="container mx-auto p-4">
        <Header />
        <main id="main" className="mb-20">
          { children }
        </main>
        <Footer />
      </div>
    </>
  )

}