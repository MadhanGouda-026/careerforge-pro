import { useState } from "react"
import Navbar from "../components/Navbar"
import API from "../api/axios"

const CoverLetterGenerator = () => {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [letter, setLetter] = useState("")
  const [loading, setLoading] = useState(false)

  const generateLetter = async () => {
    if (!name || !role || !company)
      return alert("Fill all fields")

    try {
      setLoading(true)
      const { data } = await API.post("/cover", {
        name,
        role,
        company
      })
      setLetter(data.letter)
    } catch (err) {
      alert("Error generating letter")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Cover Letter Generator
        </h2>

        <div className="grid gap-4">
          <input
            className="border p-3 rounded-xl"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Job Role"
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />

          <button
            onClick={generateLetter}
            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Generate Letter"}
          </button>
        </div>

        {letter && (
          <div className="mt-8 bg-white shadow-xl rounded-xl p-6 whitespace-pre-line">
            {letter}
          </div>
        )}
      </div>
    </div>
  )
}

export default CoverLetterGenerator
