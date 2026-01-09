const API_BASE = 'https://fakestoreapi.com'

export async function fetchProducts() {
  const response = await fetch(`${API_BASE}/products`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export async function fetchProductById(id) {
  const response = await fetch(`${API_BASE}/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}
