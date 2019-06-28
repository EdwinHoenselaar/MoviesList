const express = require('express')
const router = express.Router()

// Movie model
const Movie = require('../../models/Movie')

// route GET api/movies
// GET all movies
router.get('/', (req, res) => {
  Movie.find()
    .sort({ title: 1 })
    .then(movies => res.json(movies))
})

// route GET api/movies/:id
// GET one movie by id
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
})

// route POST api/movies
// Create new movie
router.post('/', (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    year: req.body.year,
    runtime: req.body.runtime,
    grade: req.body.grade
  })
  newMovie.save().then(movie => res.json(movie))
})

// route DELETE api/movies/:id
// delete an entry out of the database
router.delete('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => movie.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports = router