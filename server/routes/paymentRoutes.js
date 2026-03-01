import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { checkout, stripeWebhook } from "../controllers/paymentController.js"

const router = express.Router()

router.post("/checkout", protect, checkout)
router.post("/webhook",express.raw({ type: "application/json" }), stripeWebhook)

export default router
