import { IProduct } from '@client/interfaces'
import { onGetRandomPropertyCard } from '@client/utils'

const MapperProduct = (product: Record<string, any>): IProduct => {
  return {
    id: product.id,
    title: product.title,
    category: product.category,
    price: product.price,
    isFavorite: product.isFavorite,
    createdAt: product.createdAt,
    theme: product.theme,
    tier: product.tier,
    author: product.author,
    ...onGetRandomPropertyCard(),
  }
}

const MapperProducts = (products: Record<string, any>[]) => {
  return products.map(product => MapperProduct(product))
}

export { MapperProduct, MapperProducts }
