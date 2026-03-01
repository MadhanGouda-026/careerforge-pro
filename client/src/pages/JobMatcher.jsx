import { useState } from "react"
import Navbar from "../components/Navbar"
import API from "../api/axios"

const JobMatcher = () => {
  const [jobDescription, setJobDescription] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleMatch = async () => {
    if (!jobDescription) return alert("Paste job description")

    try {
      setLoading(true)
      const { data } = await API.post("/job/match", {
        jobDescription
      })
      setResults(data)
    } catch (err) {
      alert("Error matching job")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Job Matcher
        </h2>

        <textarea
          className="w-full border p-3 rounded-xl mb-4"
          rows="6"
          placeholder="Paste Job Description here..."
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <button
          onClick={handleMatch}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Matching..." : "Match Resumes"}
        </button>

        {results.length > 0 && (
          <div className="mt-8 grid gap-4">
            {results.map((r, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-xl p-6"
              >
                <h3 className="font-bold text-lg">{r.title}</h3>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${r.score}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  Match Score: {Math.round(r.score)}%
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default JobMatcher
