import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    navigate("/dashboard")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Login</h2>

        <input className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
          Login
        </button>

        <p className="mt-3 text-sm">
          No account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
