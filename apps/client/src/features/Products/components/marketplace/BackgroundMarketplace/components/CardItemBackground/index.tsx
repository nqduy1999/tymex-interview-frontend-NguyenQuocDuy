import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { Flex, Typography } from 'antd'
import { motion } from 'framer-motion'
import backgroundMarketplaceModule from '@client/features/Products/components/marketplace/BackgroundMarketplace/BackgroundMarketplace.module.scss'

interface CardItemBackgroundProps {
  image: string
  title?: string
  index: number
  imageWidth?: number
}

const configMotion = {
  initial: {
    opacity: 0,
    translateX: -70,
    translateY: -20,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
}

const CardItemBackground = ({
  image,
  title,
  index,
  imageWidth,
}: CardItemBackgroundProps) => {
  return (
    <motion.div
      {...configMotion}
      transition={{
        duration: 0.3,
        delay: index * 0.2,
      }}
    >
      <Flex gap={8} vertical={true} justify="center" align="center">
        <ProgressiveImage
          src={image}
          preview={false}
          width={imageWidth ?? 200}
        />
        {title && (
          <Typography.Title
            className={
              backgroundMarketplaceModule.background_marketplace_card_item_list_title
            }
            level={5}
          >
            {title}
          </Typography.Title>
        )}
      </Flex>
    </motion.div>
  )
}

export default CardItemBackground
