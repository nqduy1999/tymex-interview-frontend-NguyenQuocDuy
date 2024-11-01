import { loadable } from '@client/utils'
import { Route, Routes } from 'react-router-dom'

// I called this page is Marketplace page, it's like Product list page.
const MarketplacePage = loadable(
  () => import('@client/features/Products/pages/Marketplace.Page'),
)

// TODO
// const ProductDetailsPage = loadable(
//   () => import('@client/features/Products/pages/ProductDetails.Page'),
// )

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MarketplacePage />} />
    </Routes>
  )
}

export default ProductRoutes
