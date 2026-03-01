import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from "./pages/ResumeBuilder"
import Pricing from "./pages/Pricing"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="/builder"
            element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />

          <Route path="/pricing"
            element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
