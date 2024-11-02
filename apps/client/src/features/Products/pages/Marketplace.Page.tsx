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
  const { products, loading, onChangeOffset, onLoadmore, pagination } =
    useFetchProducts()

  return (
    <div className={marketPlaceModule.marketplace}>
      <BackgroundMarketplace />
      <div className={marketPlaceModule.marketplace_content}>
        <Row gutter={[36, 12]}>
          <Col xl={7} lg={24}>
            <FilterProducts />
          </Col>
          <Col xl={17} lg={24}>
            <CategoryList onChangeOffset={onChangeOffset} />
            {loading && Number(pagination._limit) <= 10 ? (
              <SkeletonList loading={true} />
            ) : (
              <ProductList
                onLoadmore={onLoadmore}
                loading={loading}
                products={products}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketplacePage
