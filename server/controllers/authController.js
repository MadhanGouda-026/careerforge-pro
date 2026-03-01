import jwt from "jsonwebtoken"
import User from "../models/User.js"

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.create({ name, email, password })
  res.json({ ...user._doc, token: generateToken(user._id) })
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({ ...user._doc, token: generateToken(user._id) })
  } else {
    res.status(401)
    throw new Error("Invalid credentials")
  }
}
