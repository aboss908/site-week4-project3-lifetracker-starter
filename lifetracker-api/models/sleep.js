const User = require("../models/user")
const db = require("../config/database")
const {BadRequestError} = require("../utils/errors")

class Sleep {
    static async getAllSleep(email) {
        const user = await User.fetchUserByEmail(email)
        if (user) {
            const query = `
            SELECT * FROM sleep_log WHERE UserID = (
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

    static async addSleep(body) {
        const requiredFields = ["email", "sleep_date", "start_time", "end_time", "total_time"]

        requiredFields.forEach((element) => {
            if (!body.hasOwnProperty(element)) {
                throw new BadRequestError()
            }
        })

        const user = User.fetchUserByEmail(body.email)

        if (user) {
            let id = await Sleep.grabID(body.email)
    
            const query = `
            INSERT INTO sleep_log (UserID, sleep_date, start_time, end_time, total_time) VALUES ($1, $2, $3, $4, $5) RETURNING *;
            `
            const {rows} = await db.query(query,[id, body.sleep_date, body.start_time, body.end_time, body.total_time])
            return rows           
        }

        throw new BadRequestError("Email not found")
    }
}

module.exports = Sleep