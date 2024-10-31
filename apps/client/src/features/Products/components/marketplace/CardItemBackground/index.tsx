import ProgressiveImage from '@client/components/common/ProgressiveImage'
import { Flex, Typography } from 'antd'
import { motion } from 'framer-motion'

interface CardItemBackgroundProps {
  image: string
  title: string
  index: number
}

const configMotion = {
  initial: {
    opacity: 0,
    translateX: -50,
    translateY: -50,
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
}: CardItemBackgroundProps) => {
  return (
    <motion.div
      style={{ width: '100%' }}
      {...configMotion}
      transition={{
        duration: 0.3,
        delay: index * 0.5,
      }}
    >
      <Flex gap={12} vertical={true} justify="center" align="center">
        <ProgressiveImage src={image} />
        <Typography.Title level={5}>{title}</Typography.Title>
      </Flex>
    </motion.div>
  )
}

export default CardItemBackground
