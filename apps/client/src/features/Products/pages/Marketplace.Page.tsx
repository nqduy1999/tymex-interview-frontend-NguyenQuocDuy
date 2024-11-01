import marketPlaceModule from '@client/features/Products/styles/Marketplace.Page.module.scss'
import {
  BackgroundMarketplace,
  ProductList,
  CategoryList,
  FilterProducts,
  SkeletonList,
} from '@client/features/Products/components'
import { Col, Row } from 'antd'
import { useFetchProducts } from '@client/features/Products/hooks'

const MarketplacePage = () => {
  const { products, loading } = useFetchProducts()

  console.log(products, 'products')

  return (
    <div className={marketPlaceModule.marketplace}>
      <BackgroundMarketplace />
      <div className={marketPlaceModule.marketplace_content}>
        <Row gutter={[36, 12]}>
          <Col span={7}>
            <FilterProducts />
          </Col>
          <Col span={17}>
            <CategoryList />
            {loading ? (
              <SkeletonList loading={true} />
            ) : (
              <ProductList products={products} />
            )}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketplacePage
