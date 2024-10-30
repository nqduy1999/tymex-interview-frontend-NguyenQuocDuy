import { RouteObject } from 'react-router-dom'
import { routeString } from './routeString'
import { loadable } from '@client/utils/common'

const HomePage = loadable(() => import('@client/features/Home/Home.Page'))
const NotFoundPage = loadable(
  () => import('@client/features/NotFound/NotFound.Page'),
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
