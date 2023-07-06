const User = require("../models/user")
const db = require("../config/database")
const {BadRequestError} = require("../utils/errors")

class Nutrition {
    static async getAllNutrition(email) {
        const user = await User.fetchUserByEmail(email)
        if (user) {
            const query = `
            SELECT * FROM nutrition_log WHERE UserID = (
                SELECT id FROM users WHERE email = $1    
            )`
            const {rows} = await db.query(query, [email])
            return rows
        }

        throw new BadRequestError("Email not found")
    }

    static async grabID(email) {
        const user = await User.fetchUserByEmail(email)

        if (user) {
            const query1 = `SELECT id FROM users WHERE email = $1;`
            const {rows} = await db.query(query1,[email])
            return rows[0].id 
        }

        throw new BadRequestError("Email not found")
    }

    static async addNutrition(body) {
        const requiredFields = ["email", "food_name", "calories", "quantity"]

        requiredFields.forEach((element) => {
            if (!body.hasOwnProperty(element)) {
                throw new BadRequestError()
            }
        })

        const user = User.fetchUserByEmail(body.email)

        if (user) {
            let id = await Nutrition.grabID(body.email)
    
            const query = `
            INSERT INTO nutrition_log (UserID, food_name, calories, quantity) VALUES ($1, $2, $3, $4) RETURNING *;
            `
            const {rows} = await db.query(query,[id, body.food_name, body.calories, body.quantity])
            return rows           
        }

        throw new BadRequestError("Email not found")
    }
}

module.exports = Nutrition