import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    fetchProducts()
      .then((data) => {
        if (isMounted) {
          setProducts(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Unable to load products')
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { products, loading, error }
}
