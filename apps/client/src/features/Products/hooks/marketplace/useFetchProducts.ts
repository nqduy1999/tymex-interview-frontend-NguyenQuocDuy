import { useURLParams } from '@client/hooks'
import { IProduct } from '@client/interfaces'
import { routeString } from '@client/routes/routeString'
import { getProducts } from '@client/services'
import { onGetDefaultPaging, timeout } from '@client/utils'
import { ParsedQuery } from 'query-string'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useFetchProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const navigate = useNavigate()
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
    }
  }, [params])

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

  useEffect(() => {
    if (Object.keys(params)?.length === 0) {
      navigate(`${routeString.PRODUCT.root}?${onGetDefaultPaging({})}`)
      return
    }
    fetchProducts()
  }, [fetchProducts])

  return {
    products,
    loading,
  }
}

export default useFetchProducts
