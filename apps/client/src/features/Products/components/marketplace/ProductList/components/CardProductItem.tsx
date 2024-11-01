import { Avatar, Flex, Image, Typography } from 'antd'
import productListModule from '../ProducList.module.scss'
import { IProduct } from '@client/interfaces'
import { IMAGES_CONST } from '@client/configs'
import { getRandomColor } from '@client/utils'
import { motion } from 'framer-motion'

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

const CardProductItem = (props: IProduct & { index: number }) => {
  const { background, image, price, title, author, index } = props
  return (
    <motion.div
      transition={{
        duration: 0.3,
        delay: index * 0.5,
      }}
      {...configMotion}
      className={productListModule.card_product_item}
    >
      <div className={productListModule.card_product_item_header}>
        <div
          className={productListModule.card_product_item_header_background}
          style={{
            background,
          }}
        >
          <Image
            src={image}
            alt={image}
            className={productListModule.card_product_item_header_character}
            preview={false}
          />
        </div>
      </div>
      <Flex gap={24} vertical>
        <Flex justify="space-between" align="center">
          <Typography.Title level={5} style={{ margin: 0 }}>
            {title}
          </Typography.Title>
          <Flex gap={5} align="center">
            <img
              src={IMAGES_CONST.icons.etherium}
              alt={IMAGES_CONST.icons.etherium}
            />
            <Typography style={{ fontSize: 14, lineHeight: 1 }}>
              {price}
            </Typography>
          </Flex>
        </Flex>
        <Flex>
          <Avatar
            style={{
              backgroundColor: getRandomColor(),
            }}
            src={author.avatar}
            size={32}
            alt={author.avatar}
          />
        </Flex>
      </Flex>
    </motion.div>
  )
}
export default CardProductItem
