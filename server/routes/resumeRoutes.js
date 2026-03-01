import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import {
  createResume,
  getResumes,
  deleteResume
} from "../controllers/resumeController.js"

const router = express.Router()

router.route("/")
  .post(protect, createResume)
  .get(protect, getResumes)

router.delete("/:id", protect, deleteResume)

export default router
