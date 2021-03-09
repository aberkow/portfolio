import Router from "next/router"
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'portfolio',
  debug: process.env.VERCEL_ENV === 'production' ? false : true,
  plugins: [
    googleAnalytics({
      trackingId: 'UA-70391713-1'
    })
  ]
})

// make sure analytics works in the browser context
if (typeof window !== 'undefined') {
  analytics.page()
}

Router.events.on("routeChangeComplete", () => {
  analytics.page();
})

export default analytics