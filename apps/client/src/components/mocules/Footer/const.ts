import { routeString } from '@client/routes/routeString'

interface INavigationData {
  title: string
  path: string
  isExternalLink?: boolean // open new tab when this var true
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
  
]

export { navigationData }
