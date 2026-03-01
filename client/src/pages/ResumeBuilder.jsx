import { useState } from "react"
import Navbar from "../components/Navbar"
import API from "../api/axios"

const ResumeBuilder = () => {
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [atsScore, setAtsScore] = useState(0)

  const saveResume = async () => {
    const { data } = await API.post("/resume", {
      title,
      content: { name },
      jobDescription
    })
    setAtsScore(data.atsScore)
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 p-8 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <input className="border p-2 w-full mb-3"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} />
          <input className="border p-2 w-full mb-3"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)} />
          <textarea className="border p-2 w-full mb-3"
            placeholder="Job Description"
            onChange={(e) => setJobDescription(e.target.value)} />
          <button onClick={saveResume}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl">
            Save Resume
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="mt-4">ATS Score: {atsScore}%</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
