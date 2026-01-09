import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

function CartPage() {
  const { items, itemCount, cartTotal } = useCart()

  return (
    <section className="page">
      <div className="page-header">
        <h1>Your Cart</h1>
        <p>{itemCount} items</p>
      </div>
      {items.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/" className="link-button">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="placeholder-card">
          <p>Cart total: ${cartTotal.toFixed(2)}</p>
          <Link to="/checkout" className="link-button">
            Go to checkout
          </Link>
        </div>
      )}
    </section>
  )
}

export default CartPage
