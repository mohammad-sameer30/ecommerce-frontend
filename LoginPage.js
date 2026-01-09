import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const redirectTo = params.get('redirectTo') || '/'
    login({ email })
    navigate(redirectTo, { replace: true })
  }

  return (
    <section className="page auth-page">
      <div className="page-header">
        <h1>Welcome back</h1>
        <p>Use any email to simulate login.</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
        <button type="submit" className="primary-button">
          Continue
        </button>
      </form>
    </section>
  )
}

export default LoginPage
