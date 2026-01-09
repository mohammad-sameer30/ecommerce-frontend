import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

function CheckoutPage() {
  const { items } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart')
    }
  }, [items, navigate])

  return (
    <section className="page">
      <div className="page-header">
        <h1>Checkout</h1>
        <p>Secure your order with a quick review and payment.</p>
      </div>
      <div className="placeholder-card">
        <p>Checkout form and order summary will appear here.</p>
      </div>
    </section>
  )
}

export default CheckoutPage
