import { HttpRequest } from '@client/configs/httpRequest'
import { IProduct } from '@client/interfaces'
import { ENDPOINT } from './endpoint'
import { MapperProducts } from '@client/mapping/products'

export const getProducts = async (
  filter: Record<string, any>,
): Promise<IProduct[]> => {
  const response = await HttpRequest.get<IProduct[]>(ENDPOINT.PRODUCTS, {
    params: filter,
  })
  const products = MapperProducts(response.data) // convert data to custom data you want
  return products
}
