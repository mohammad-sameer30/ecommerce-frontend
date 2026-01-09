import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Featured Products</h1>
        <p>Browse the catalog and add items to your cart.</p>
      </div>
      <div className="placeholder-grid">
        {[1, 2, 3, 4].map((id) => (
          <article key={id} className="placeholder-card">
            <div className="placeholder-thumb" />
            <h3>Product {id}</h3>
            <p>$00.00</p>
            <Link to={`/product/${id}`} className="link-button">
              View details
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Home
