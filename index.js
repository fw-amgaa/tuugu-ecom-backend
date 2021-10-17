const express = require('express')
const cors = require("cors");
const pool = require("./db");
const { json } = require('express');

const app = express()
const port = 8000

app.use(cors())
app.use(express.json());

// Get all magazines
app.get('/magazines', async (req, res) => {
    const allMagazines = await pool.query('SELECT * FROM magazines')
    res.json({message: "success", data: allMagazines})
})

// Create new magazine
app.post('/magazines', async (req, res) => {
    const {data} = req.body;
    const newMagazine = await pool.query(
        'INSERT INTO magazines (title, image, sub_title, author, published_date, description, body) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
        [data.title, data.image, data.sub_title, data.author, data.published_date, data.description, data.body]
    )
 
    res.json({ message: "success", data: newMagazine })
})

// Delete magazine by id
app.delete('/magazines/:id', async (req, res) => {
    var id = req.params.id;
    console.log(id)
    try {
        const response = await pool.query('DELETE from magazines where id = ($1)', [id])
        res.json({ message: "Success", data: response })
    } catch (e) {
        console.log(e)
        res.json({ message: "Failed" })
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})