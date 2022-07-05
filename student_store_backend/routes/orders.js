const express = require("express")
const router = express.Router()
const orders = require("../models/order")
const security = require("../middleware/security")

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {user} = res.locals
        const orders = await orders.listOrdersForUser(user)
        return res.status(200).json({ orders })
    } catch(err) {
        next(err)
    }
})

router.post("/", security.requireAuthenticatedUser,  async (req, res, next) => {
    try {
        const {user} = res.locals
        const order = await orders.createOrder(user)
        return res.status(200).json({ order })
    } catch(err) {
        next(err)
    }
})

module.exports = router