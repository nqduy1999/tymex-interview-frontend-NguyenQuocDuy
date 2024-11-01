import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { IMAGES_CONST } from '@client/configs'

import backgroundMarketplaceModule from './BackgroundMarketplace.module.scss'
import { CHARACTERS_LIST } from '@client/features/Products/components/marketplace/BackgroundMarketplace/helper'
import {
  CardItemBackground,
  CardItemBackgroundLarge,
} from '@client/features/Products/components/marketplace/BackgroundMarketplace/components'

const BackgroundMarketplace = () => {
  return (
    <div className={backgroundMarketplaceModule.background_marketplace}>
      <ProgressiveImage
        src={IMAGES_CONST.products.background}
        alt={IMAGES_CONST.products.background}
        preview={false}
      />
      <div
        className={backgroundMarketplaceModule.background_marketplace_container}
      >
        <div
          className={
            backgroundMarketplaceModule.background_marketplace_card_item_list
          }
        >
          {CHARACTERS_LIST.map((character, index) => (
            <CardItemBackground
              key={character.title}
              image={character.image}
              index={index + 1}
              title={character.title}
            />
          ))}
        </div>
        <CardItemBackgroundLarge />
      </div>
      <ProgressiveImage
        src={IMAGES_CONST.products.newArrival}
        wrapperClassName={
          backgroundMarketplaceModule.background_marketplace_title
        }
        preview={false}
      />
    </div>
  )
}

export default BackgroundMarketplace
