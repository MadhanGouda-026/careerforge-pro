import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(form.name, form.email, form.password)
    navigate("/dashboard")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Register</h2>

        <input className="w-full border p-2 mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input type="password"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button
           type="submit"
           className="w-full bg-blue-600 text-white py-2 rounded-xl">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
