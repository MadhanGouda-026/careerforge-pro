import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      
      <Link to="/dashboard" className="text-xl font-bold">
        CareerForge Pro
      </Link>

      {user && (
        <div className="flex gap-6 items-center text-sm">

          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>

          <Link to="/builder" className="hover:underline">
            Builder
          </Link>

          <Link to="/job-matcher" className="hover:underline">
            Job Match
          </Link>

          <Link to="/cover-letter" className="hover:underline">
            Cover Letter
          </Link>

          <Link to="/pricing" className="hover:underline">
            Upgrade
          </Link>

          <button
            onClick={logout}
            className="bg-white text-blue-600 px-4 py-1 rounded-xl hover:bg-blue-100 transition"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  )
}

export default Navbar
