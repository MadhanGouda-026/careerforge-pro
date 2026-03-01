import Resume from "../models/Resume.js"
import { extractKeywords } from "../services/keywordService.js"
import { calculateATSScore } from "../services/atsService.js"

export const createResume = async (req, res) => {
  const { title, content, jobDescription } = req.body

  const keywords = extractKeywords(jobDescription || "")
  const atsScore = calculateATSScore(
    JSON.stringify(content).toLowerCase(),
    keywords
  )

  const resume = await Resume.create({
    userId: req.user._id,
    title,
    content,
    atsScore
  })

  res.json({ resume, keywords, atsScore })
}

export const getResumes = async (req, res) => {
  const resumes = await Resume.find({ userId: req.user._id })
  res.json(resumes)
}

export const deleteResume = async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
}
