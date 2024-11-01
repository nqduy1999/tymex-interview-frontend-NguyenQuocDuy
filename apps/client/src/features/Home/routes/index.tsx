import { loadable } from '@client/utils'
import { Route, Routes } from 'react-router-dom'

const HomePage = loadable(() => import('@client/features/Home/pages/Home.Page'))

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default HomeRoutes
