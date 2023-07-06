const express = require("express")
const router = express.Router()
const {UnauthorizedError} = require("../utils/errors")
const {authenticateJWT} = require("../middleware/security")
const Exercise = require("../models/exercise")
const Nutrition = require("../models/nutrition")
const Sleep = require("../models/sleep")

// Assuming that the security middleware is checked out, return all the information
// about the total exercise minutes, daily calories, average hours of sleep.
router.get("/activity", async (req,res,next) => {
    
})

// This should return the list of information of each exercise done, using the
// database.
router.get("/exercise", authenticateJWT, async (req,res,next) => {
    try {
        const email = req.user.email
        const response = await Exercise.getAllExercises(email)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

// This should add a new exercise into the database.
router.post("/exercise", authenticateJWT, async (req,res,next) => {
    try {
        const info = {
            email: req.user.email,
            exercise_name: req.body.exercise_name,
            duration: req.body.duration,
            intensity: req.body.intensity
        }
        const response = await Exercise.addExercise(info)
        res.status(200).send(response)   
    } catch(error) {
        next(error)
    }
})

// This should return the list of information of each nutrition recorded w/ the database.
router.get("/nutrition", authenticateJWT, async (req,res,next) => {
    try {
        const email = req.user.email
        const response = await Nutrition.getAllNutrition(email)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }    
})

// This should record a new piece of nutrition.
router.post("/nutrition", authenticateJWT, async (req,res,next) => {
    try {
        const info = {
            email: req.user.email,
            food_name: req.body.food_name,
            calories: req.body.calories,
            quantity: req.body.quantity
        }
        const response = await Nutrition.addNutrition(info)
        res.status(200).send(response)   
    } catch(error) {
        next(error)
    }    
})

// Grabs the list of already logged sleep from the database.
router.get("/sleep", authenticateJWT, async (req,res,next) => {
    try {
        const email = req.user.email
        const response = await Sleep.getAllSleep(email)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

// Logs a new sleep record into the database.
router.post("/sleep", authenticateJWT, async (req,res,next) => {
    try {
        const info = {
            email: req.user.email,
            sleep_date: req.body.sleep_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            total_time: req.body.total_time
        }
        const response = await Sleep.addSleep(info)
        res.status(200).send(response)   
    } catch(error) {
        next(error)
    }
})

module.exports = router