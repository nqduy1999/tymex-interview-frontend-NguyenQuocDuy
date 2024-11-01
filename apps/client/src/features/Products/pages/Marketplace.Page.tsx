import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { IMAGES_CONST } from '@client/configs'
import marketPlaceModule from '@client/features/Products/styles/Marketplace.Page.module.scss'
import { BackgroundMarketplace, FilterProducts } from '../components'
import { Col, Row } from 'antd'

const MarketplacePage = () => {
  return (
    <div className={marketPlaceModule.marketplace}>
      <BackgroundMarketplace />
      <div className={marketPlaceModule.marketplace_content}>
        <Row gutter={[12, 12]}>
          <Col span={7}>
            <FilterProducts />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketplacePage
