const express = require("express");
const { verifyToken } = require("../../auth/checkAuth");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.use(verifyToken).post("/createCheckoutSession", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "VND",
      product_data: {
        name: product.name,
        images: [product.image],
      },
      unit_amount: product.price,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/order-card",
  });
  res.json(session);
});

module.exports = router;
