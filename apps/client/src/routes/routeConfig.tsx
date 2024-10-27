import { RouteObject } from 'react-router-dom'
import { routeString } from './routeString'
import { loadable } from '@client/utils/common'

const HomePage = loadable(() => import('@client/components/pages/HomePage'))

export const routes: RouteObject[] = [
  {
    element: <HomePage />,
    path: routeString.HOME
  },
  {
    element: <div>not found</div>,
    path: routeString.NOT_FOUND
  }
]
