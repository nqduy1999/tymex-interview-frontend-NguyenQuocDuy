import { RouteObject } from 'react-router-dom'
import { routeString } from './routeString'
import { loadable } from '@client/utils/common'

const HomeRoutes = loadable(() => import('@client/features/Home'))
const NotFoundPage = loadable(() => import('@client/features/NotFound'))
const MarketPlaceRoutes = loadable(() => import('@client/features/Products'))

export const routes: RouteObject[] = [
  {
    element: <HomeRoutes />,
    path: routeString.HOME,
  },
  {
    element: <MarketPlaceRoutes />,
    path: routeString.PRODUCT.root,
  },
  {
    element: <NotFoundPage />,
    path: routeString.NOT_FOUND,
  },
]
