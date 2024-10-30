import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { routes } from '@client/routes/routeConfig'
import { Suspense } from 'react'
import GeneralLayout from '@client/components/Layout'
import { LazyLoad } from '@client/components/common'

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route element={<GeneralLayout />}>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<LazyLoad />}>{route.element}</Suspense>
            }
          />
        ))}
      </Route>,
    ]),
  )

  return <RouterProvider router={router} />
}

export default Routes
