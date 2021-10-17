const Pool = require("pg").Pool

const pool =  new Pool({
    user: "yllirvpamiosdz",
    password: "435603dcb9b12424ad51f1b286ddc01363f814177e8221d702482501d8ffb761",
    database: "dsoced7jiio16",
    host: "ec2-54-164-56-10.compute-1.amazonaws.com",
    port: 5432
})

module.exports = pool