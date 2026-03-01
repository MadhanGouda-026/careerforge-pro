import mongoose from "mongoose"

const resumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    content: Object,
    atsScore: Number
  },
  { timestamps: true }
)

export default mongoose.model("Resume", resumeSchema)
