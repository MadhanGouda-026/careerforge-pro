import Resume from "../models/Resume.js"

export const matchJob = async (req, res) => {
  const { jobDescription } = req.body
  const resumes = await Resume.find({ userId: req.user._id })

  const results = resumes.map((r) => {
    const score =
      (JSON.stringify(r.content).length /
        jobDescription.length) *
      100
    return { title: r.title, score: Math.min(score, 100) }
  })

  res.json(results)
}
