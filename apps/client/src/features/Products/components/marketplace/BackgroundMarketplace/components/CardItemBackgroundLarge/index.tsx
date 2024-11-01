import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { motion } from 'framer-motion'
import backgroundMarketplaceModule from '@client/features/Products/components/marketplace/BackgroundMarketplace/BackgroundMarketplace.module.scss'
import { CHARACTERS_LIST } from '@client/features/Products/components/marketplace/BackgroundMarketplace/helper'
import { IMAGES_CONST } from '@client/configs'

const configMotion = {
  initial: {
    opacity: 0,
    translateX: 0,
    translateY: 200,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
}

const CardItemBackgroundLarge = () => {
  return (
    <motion.div
      className={backgroundMarketplaceModule.background_marketplace_card_large}
      {...configMotion}
      transition={{
        duration: 0.3,
        delay: (CHARACTERS_LIST.length + 1) * 0.5,
      }}
    >
      <ProgressiveImage
        className={
          backgroundMarketplaceModule.background_marketplace_card_large_image
        }
        src={IMAGES_CONST.products.characters.theDj}
        preview={false}
      />
      <ProgressiveImage
        className={
          backgroundMarketplaceModule.background_marketplace_card_large_text
        }
        src={IMAGES_CONST.products.characters.theDjText}
        preview={false}
      />
    </motion.div>
  )
}

export default CardItemBackgroundLarge
