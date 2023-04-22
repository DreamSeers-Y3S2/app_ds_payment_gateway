const express = require("express");
const { createPaymentIntent } = require("../controllers/StripeHandler");
const router = express.Router();

router.route("/payment").post(createPaymentIntent);

module.exports = router;
