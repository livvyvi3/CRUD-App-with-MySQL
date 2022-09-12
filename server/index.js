const express =require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password123',
    database: 'CRUD_Db'
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post('/', (req, res) => {

    const movieName = req.body.movieName
    const moviereview = req.body.MovieReview

    const sqlInstert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Game of Cards', 'Well not a movie');"
    db.query(sqlInstert, [movieName, MovieReview],(err, result) => {
        res.send('Inserted a movie and its review');
    })
    
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));