import { useEffect } from 'react'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

const configuration: Partial<NProgress.NProgressOptions> = {
  showSpinner: true,
  easing: 'ease',
}

const LazyLoad = () => {
  NProgress.configure(configuration)

  useEffect(() => {
    NProgress.start()

    setTimeout(() => {
      NProgress.done()
    }, 100)
    return () => {
      NProgress.done(true)
    }
  })

  return null
}

export default LazyLoad
