import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { IMAGES_CONST } from '@client/configs'
import marketPlaceModule from '@client/features/Products/styles/Marketplace.Page.module.scss'
import { BackgroundMarketplace } from '../components'

const MarketplacePage = () => {
  return (
    <div className={marketPlaceModule.marketplace_container}>
      <BackgroundMarketplace />
    </div>
  )
}

export default MarketplacePage
