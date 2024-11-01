import { useURLParams } from '@client/hooks'
import { IProduct } from '@client/interfaces'
import { getProducts } from '@client/services'
import { timeout } from '@client/utils'
import { useCallback, useEffect, useState } from 'react'

const useFetchProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const params = useURLParams()

  const filterProducts = (products: IProduct[]) => {
    return products.slice(0, 10)
  }

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const products = await getProducts(params)
      await timeout(1500)
      setProducts(filterProducts(products))
    } finally {
      setLoading(false)
    }
  }, [params])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return {
    products,
    loading,
  }
}

export default useFetchProducts
