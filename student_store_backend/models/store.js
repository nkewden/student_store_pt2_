const db = require("../db")


class Store {
    static async listProducts() {
        const result = db.query(`SELECT * FROM products`)

        return result
    }
}

module.exports = Store