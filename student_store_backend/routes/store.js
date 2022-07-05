const Store = require("../models/store")
const express = require("express")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const user = await Store.listProducts()
        return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }
})

module.exports = router