const User = require("../models/user")
const db = require("../config/database")
const {BadRequestError} = require("../utils/errors")

class Exercise {
    static async getAllExercises(email) {
        const user = await User.fetchUserByEmail(email)
        if (user) {
            const query = `
            SELECT * FROM exercise_log WHERE UserID = (
                SELECT id FROM users WHERE email = $1   
            )
            ORDER BY date DESC`
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

    static async addExercise(body) {
        const requiredFields = ["email", "exercise_name", "duration", "intensity"]

        requiredFields.forEach((element) => {
            if (!body.hasOwnProperty(element)) {
                throw new BadRequestError()
            }
        })

        const user = User.fetchUserByEmail(body.email)

        if (user) {
            let id = await Exercise.grabID(body.email)
    
            const query = `
            INSERT INTO exercise_log (UserID, exercise_name, duration, intensity) VALUES ($1, $2, $3, $4) RETURNING *;
            `
            const {rows} = await db.query(query,[id, body.exercise_name, body.duration, body.intensity])
            return rows           
        }

        throw new BadRequestError("Email not found")
    }
}

module.exports = Exercise