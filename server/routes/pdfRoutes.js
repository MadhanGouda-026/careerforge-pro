import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { downloadResumePDF } from "../controllers/pdfController.js"

const router = express.Router()

router.get("/:id/download", protect, downloadResumePDF)

export default router
