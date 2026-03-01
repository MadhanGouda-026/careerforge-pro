import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex justify-between">
      <Link to="/dashboard" className="font-bold text-lg">
        CareerForge Pro
      </Link>
      {user && (
        <button onClick={logout} className="bg-white text-blue-600 px-4 py-1 rounded-xl">
          Logout
        </button>
      )}
    </div>
  )
}

export default Navbar
