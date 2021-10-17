const Pool = require("pg").Pool

const pool =  new Pool({
    user: "amka",
    password: "00231131",
    database: "tuugu_db",
    host: "localhost",
    port: 5432
})

module.exports = pool