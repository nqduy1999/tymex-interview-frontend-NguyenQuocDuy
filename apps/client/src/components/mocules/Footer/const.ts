import { routeString } from '@client/routes/routeString'

interface INavigationData {
  title: string
  path: string
  isExternalLink?: boolean // open new tab when this var true
}

interface IContactUsData {
  icon: string
  title: string
  action?: () => void
}

const navigationData: INavigationData[] = [
  {
    title: 'Home',
    path: routeString.HOME
  },
  {
    title: 'About us',
    path: routeString.HOME
  },
  {
    title: 'Our teams',
    path: routeString.HOME
  },
  {
    title: 'Whitepaper',
    path: routeString.HOME
  },
  {
    title: 'Marketplace',
    path: routeString.HOME
  },
  {
    title: 'Roadmap',
    path: routeString.HOME
  },
  {
    title: 'FAQs',
    path: routeString.HOME
  },
  {
    title: 'News',
    path: routeString.HOME
  },
  {
    title: 'Community',
    path: routeString.HOME
  }
]

const contactUsData: IContactUsData[] = []

export { navigationData, contactUsData }
