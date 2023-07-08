const db = require("../config/database")
const {BadRequestError} = require("../utils/errors")

class Activity {
    static async grabActivities(email) {
        try {
            const totalMinutes = await Activity.grabTotalExerciseMinutes(email)
            const maxSleep = await Activity.grabMaxSleep(email)
            const averageCalories = await Activity.grabAverageCalories(email)
            return {totalMinutes: totalMinutes ? totalMinutes : 0, maxSleep: maxSleep ? maxSleep: 0,
            averageCalories:averageCalories ? averageCalories: 0}
        } catch (error) {
            throw new BadRequestError()
        }
    }

    static async grabTotalExerciseMinutes(email) {
        const query = `
            SELECT SUM(duration) FROM exercise_log WHERE UserID = (
                SELECT id FROM users WHERE email = $1
            )
        `
        const {rows} = await db.query(query, [email])
        return rows[0].sum    
    }

    static async grabMaxSleep(email) {
        const query = `
            SELECT MAX(total_time) FROM sleep_log WHERE UserID = (
                SELECT id FROM users WHERE email = $1
            )
        `
        const {rows} = await db.query(query, [email])
        return rows[0].max    
    }

    static async grabAverageCalories(email) {
        const query = `
            SELECT AVG(calories) FROM nutrition_log WHERE UserID = (
                SELECT id FROM users WHERE email = $1
            )
        `
        const {rows} = await db.query(query, [email])
        return rows[0].avg    
    }

}

module.exports = Activity