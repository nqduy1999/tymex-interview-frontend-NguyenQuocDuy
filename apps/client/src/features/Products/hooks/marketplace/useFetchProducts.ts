import { useURLParams } from '@client/hooks'
import { IProduct } from '@client/interfaces'
import { routeString } from '@client/routes/routeString'
import { getProducts } from '@client/services'
import { timeout } from '@client/utils'
import { ParsedQuery } from 'query-string'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useFetchProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState({
    _page: '1',
    _limit: '10',
  })
  const [products, setProducts] = useState<IProduct[]>([])
  const params = useURLParams()

  const mapperParams = useMemo(() => {
    const { price, createdAt, ...restParams } = params
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
      ...pagination,
    }
  }, [params, pagination])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const products = await getProducts(mapperParams)
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

  return {
    products,
    loading,
    onChangeOffset,
    onLoadmore,
    pagination,
  }
}

export default useFetchProducts
