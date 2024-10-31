import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { IMAGES_CONST } from '@client/configs'

import backgroundMarketplaceModule from './BackgroundMarketplace.module.scss'

const BackgroundMarketplace = () => {
  return (
    <div
      className={backgroundMarketplaceModule.background_marketplace_container}
    >
      <ProgressiveImage
        src={IMAGES_CONST.products.background}
        alt={IMAGES_CONST.products.background}
        preview={false}
      />
      <div
        className={backgroundMarketplaceModule.background_marketplace_content}
      >
        <ProgressiveImage
          src={IMAGES_CONST.products.backgroundSub}
          alt={IMAGES_CONST.products.backgroundSub}
          preview={false}
        />
        
      </div>
    </div>
  )
}

export default BackgroundMarketplace
