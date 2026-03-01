import Resume from "../models/Resume.js"
import { generatePDF } from "../services/pdfService.js"

export const downloadResumePDF = async (req, res) => {
  const resume = await Resume.findById(req.params.id)

  if (!req.user.isPro) {
    res.status(403)
    throw new Error("Upgrade to PRO")
  }

  const pdf = await generatePDF(resume)

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=resume.pdf"
  })

  res.send(pdf)
}
