import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import API from "../api/axios"

const Dashboard = () => {
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    API.get("/resume").then((res) => setResumes(res.data))
  }, [])

  return (
    <div>
      <Navbar />
      <div className="p-8 grid md:grid-cols-2 gap-6">
        {resumes.map((r) => (
          <div key={r._id} className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="font-bold">{r.title}</h3>
            <p>ATS Score: {r.atsScore}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
