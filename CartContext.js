import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_KEY = 'cart:items'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY)
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => setItems([])

  const totals = useMemo(() => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0)
    const cartTotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
    return { itemCount, cartTotal }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      ...totals,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [items, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
