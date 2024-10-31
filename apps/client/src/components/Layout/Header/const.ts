import { routeString } from '@client/routes/routeString'

const HEADER_NAVIGATION = {
  [routeString.HOME]: {
    title: 'HOME',
    path: routeString.HOME,
  },
  [routeString.ABOUT_US]: {
    title: 'ABOUT US',
    path: routeString.ABOUT_US,
  },
  [routeString.OUR_TEAMS]: {
    title: 'OUR TEAMS',
    path: routeString.OUR_TEAMS,
  },
  [routeString.PRODUCT.root]: {
    title: 'MARKETPLACE',
    path: routeString.PRODUCT.root,
  },
  [routeString.ROADMAP]: {
    title: 'ROAD MAP',
    path: routeString.ROADMAP,
  },
  [routeString.WHITEPAPER]: {
    title: 'WHITEPAPER',
    path: routeString.WHITEPAPER,
  },
}

export { HEADER_NAVIGATION }
