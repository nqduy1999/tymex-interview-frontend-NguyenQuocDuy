import { useInterval, useURLParams } from '@client/hooks'
import { IProduct } from '@client/interfaces'
import { ProductService } from '@client/services'
import { timeout } from '@client/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'

const INTERVAL_TIME = 60 * 1000 // every 60s refetch data to get latest

const useFetchProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState({
    _page: '1',
    _limit: '10',
  })
  const [products, setProducts] = useState<IProduct[]>([])
  const params = useURLParams()

  const mapperParams = useMemo(() => {
    const { price, createdAt, minPrice, maxPrice, ...restParams } = params
    return {
      ...restParams,
      ...(price
        ? {
            _sort: 'price',
            _order: price,
          }
        : {}),
      ...(createdAt
        ? {
            _sort: 'createdAt',
            _order: createdAt,
          }
        : {}),
      ...(minPrice && maxPrice
        ? {
            price_gte: minPrice,
            price_lte: maxPrice,
          }
        : {}),
      ...pagination,
    }
  }, [params, pagination])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const products = await ProductService.getProducts(mapperParams)
      await timeout(1500)
      setProducts(products)
    } finally {
      setLoading(false)
    }
  }, [mapperParams])

  const onChangeOffset = (perPage: string) => {
    setPagination({ ...pagination, _limit: perPage })
  }

  const onLoadmore = (perPage: number) => {
    setPagination({
      ...pagination,
      _limit: (Number(pagination._limit) + perPage).toString(),
    })
  }
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useInterval(() => {
    fetchProducts()
  }, INTERVAL_TIME)

  return {
    products,
    loading,
    onChangeOffset,
    onLoadmore,
    pagination,
  }
}

export default useFetchProducts
