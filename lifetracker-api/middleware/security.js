const User = require("../models/user")

const authenticateJWT = async (req,res,next) => {
    // Extracting the JWT token from the request
    const token = req.headers.authorization
    let checkerToken = undefined
    let checkerScheme = undefined

    if (token) {
        const[scheme, theToken] = token.split(" ")
        checkerToken = theToken
        checkerScheme = scheme
    }

    if (checkerScheme !== "Bearer" || !checkerToken) {
        return res.status(401).json({error: "Unauthorized: Missing authorization token."})
    }

    // needs to verify by calling verifyAuth
    const result = await User.verifyAuth(checkerToken)

    // If token is valid, assign decoded payload info to req.user
    if (!result) {
        return res.status(401).json({error: "Invalid token"})
    }

    // Check to see if the user exists
    const user = await User.fetchUserByEmail(result.email)

    if (!user) {
        return res.status(401).json({error: "User not found"})
    }

    // Setting req.user to the decoded user and calling next()
    req.user = result
    next()
}

module.exports = {authenticateJWT}