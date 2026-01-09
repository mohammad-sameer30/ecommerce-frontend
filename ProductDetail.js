import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()

  return (
    <section className="page">
      <div className="page-header">
        <h1>Product Detail</h1>
        <p>Product ID: {id}</p>
      </div>
      <div className="placeholder-card large">
        <div className="placeholder-thumb large" />
        <div>
          <h3>Product title</h3>
          <p className="muted">Description and details will appear here.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
