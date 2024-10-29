import { IMAGES_CONST } from '@client/configs'
import { routeString } from '@client/routes/routeString'

interface INavigationData {
  title: string
  path: string
  isExternalLink?: boolean // open new tab when this var true
}

interface IContactUsData {
  icon: string
  title: string
  type: 'phone' | 'email'
}

const navigationData: INavigationData[] = [
  {
    title: 'Home',
    path: routeString.HOME,
  },
  {
    title: 'About us',
    path: routeString.HOME,
  },
  {
    title: 'Our teams',
    path: routeString.HOME,
  },
  {
    title: 'Whitepaper',
    path: routeString.HOME,
  },
  {
    title: 'Marketplace',
    path: routeString.HOME,
  },
  {
    title: 'Roadmap',
    path: routeString.HOME,
  },
  {
    title: 'FAQs',
    path: routeString.HOME,
  },
  {
    title: 'News',
    path: routeString.HOME,
  },
  {
    title: 'Community',
    path: routeString.HOME,
  },
]

const contactUsData: IContactUsData[] = [
  {
    icon: IMAGES_CONST.icons.phone,
    title: '0916223537',
    type: 'phone',
  },
  {
    icon: IMAGES_CONST.icons.email,
    title: 'tymex-talent@tyme.com',
    type: 'email',
  },
]

const termAndConditionsData = [
  {
    title: 'Security',
    path: routeString.HOME,
  },
  {
    title: 'Legal',
    path: routeString.HOME,
  },
  {
    title: 'Privacy',
    path: routeString.HOME,
  },
]
export { navigationData, contactUsData, termAndConditionsData }
