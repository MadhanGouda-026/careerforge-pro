import stripe, { createCheckoutSession } from "../services/stripeService.js"
import User from "../models/User.js"

export const checkout = async (req, res) => {
  const session = await createCheckoutSession(req.user)
  res.json({ url: session.url })
}

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"]

  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  )

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    const user = await User.findOne({ email: session.customer_email })
    user.isPro = true
    await user.save()
  }

  res.json({ received: true })
}
