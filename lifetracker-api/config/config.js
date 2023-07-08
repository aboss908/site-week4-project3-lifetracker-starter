require('dotenv').config()
const PORT = process.env.PORT || 3001
const SECRET_KEY = process.env.SECRET_KEY || "secret_key_here"
const BCRYPT_WORK_FACTOR = process.env.WORK_FACTOR || 10

// Grabbing data to use as the connection-string for the client.
function getDatabaseURI() {
    // const dbUser = process.env.DATABASE_USER || postgres
    // const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : postgres
    // const dbHost = process.env.DATABASE_HOST || postgres
    // const dbPort = process.env.DATABASE_PORT || 5432
    // const dbName = process.env.DATABASE_NAME || postgres

    return process.env.DATABASE_URL
}

module.exports = {
    getDatabaseURI,
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}