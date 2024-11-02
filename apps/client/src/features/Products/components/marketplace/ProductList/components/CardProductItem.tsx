import { Avatar, Flex, Image, Tag, Typography } from 'antd'
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
  const { background, image, price, title, author, index, tier } = props
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
        <Image
          src={IMAGES_CONST.icons.favourite}
          alt={IMAGES_CONST.icons.favourite}
          preview={false}
          width={24}
          height={24}
          wrapperStyle={{
            position: 'absolute',
            right: 10,
            top: 15,
          }}
        />
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
          <Tag className={productListModule.card_product_item_header_tier}>
            {tier}
          </Tag>
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
        <Flex gap={12} align="center">
          <Avatar
            style={{
              backgroundColor: getRandomColor(),
            }}
            src={author.avatar}
            size={32}
            alt={author.avatar}
          />
          <Typography style={{ fontSize: 12 }}>
            {author.firstName} {author.lastName}
          </Typography>
        </Flex>
      </Flex>
    </motion.div>
  )
}
export default CardProductItem
