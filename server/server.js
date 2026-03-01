import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"

import authRoutes from "./routes/authRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import pdfRoutes from "./routes/pdfRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import coverLetterRoutes from "./routes/coverLetterRoutes.js"

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

const app = express()

app.use("/api/payment/webhook", express.raw({ type: "application/json" }))

app.use(cors());

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth", authRoutes)
app.use("/api/resume", resumeRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/pdf", pdfRoutes)
app.use("/api/job", jobRoutes)
app.use("/api/cover", coverLetterRoutes)

app.get("/api/health", (req, res) => {
  res.json({ status: "CareerForge Pro Backend Running" })
})

app.use(notFound)
app.use(errorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("MongoDB error:", err)
    process.exit(1)
  })
