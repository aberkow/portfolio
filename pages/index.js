import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Berkowitz - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="my-10 flex flex-wrap">
        <div className="intro-container mb-8 md:mb-0">
          <p className="font-bold text-7xl md:text-8xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-gray-400">
              Say little.
            </span>
          </p>
          <p className="font-bold text-7xl md:text-8xl">Do much.</p>
        </div>
        <div className="headshot-name-container">
          <Image 
            className="rounded-full" 
            src="/headshot.jpg" 
            alt="Adam Berkowitz" 
            layout="intrinsic" 
            width={300} 
            height={300} 
          />
          <h1 className="md:hidden">Adam Berkowitz, <span className="block">Web Developer.</span></h1>
        </div>
        <div className="welcome-container max-w-prose my-8">
          <p>Hello,</p>
          <p>I'm Adam. A web developer based in West Hartford Connecticut.</p>
        </div>
      </div>
    </>
  )
}
