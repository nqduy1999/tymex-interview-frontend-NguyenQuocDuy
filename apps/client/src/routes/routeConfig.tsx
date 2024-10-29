import { RouteObject } from 'react-router-dom'
import { routeString } from './routeString'
import { loadable } from '@client/utils/common'

const HomePage = loadable(() => import('@client/components/pages/Home.Page'))
const NotFoundPage = loadable(
  () => import('@client/components/pages/NotFound.Page'),
)

export const routes: RouteObject[] = [
  {
    element: <HomePage />,
    path: routeString.HOME,
  },
  {
    element: <NotFoundPage />,
    path: routeString.NOT_FOUND,
  },
]
