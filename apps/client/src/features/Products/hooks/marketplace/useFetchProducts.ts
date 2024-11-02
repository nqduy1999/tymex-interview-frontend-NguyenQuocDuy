import { useURLParams } from '@client/hooks'
import { IProduct } from '@client/interfaces'
import { routeString } from '@client/routes/routeString'
import { getProducts } from '@client/services'
import { timeout } from '@client/utils'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useFetchProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const navigate = useNavigate()
  const params = useURLParams()

  const filterProducts = (
    products: IProduct[],
    params: Record<string, string>,
  ) => {
    const { offset } = params
    return products.slice(0, Number(offset))
  }

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const products = filterProducts(
        await getProducts(params),
        params as Record<string, string>,
      )
      await timeout(1500)
      setProducts(products)
    } finally {
      setLoading(false)
    }
  }, [params])

  useEffect(() => {
    if (Object.keys(params)?.length === 0) {
      navigate(`${routeString.PRODUCT.root}?offset=10`)
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
