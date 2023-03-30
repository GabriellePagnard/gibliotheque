const express = require('express');

const films = require('../data/films.json');

const router = express.Router();

router.get('/searchResult', (req, res) => {

    const query = req.query.barreRecherche

    filteredFilms = films.filter((film) => {

        const loweredTitle = film.title.toLowerCase();
        const loweredDirector = film.director.toLowerCase();
        const loweredDescription = film.description.toLowerCase();
        const loweredQuery = query.toLowerCase();
    
        return (loweredTitle.includes(loweredQuery)||loweredDirector.includes(loweredQuery)||loweredDescription.includes(loweredQuery));
      });
    
      res.render('searchResult', { query: query,  filteredFilms: filteredFilms});
    
    
  });

router.get('/', (req, res) => {
    res.render('index.ejs', {
        films: films
    });
});

router.get('/films/:id', (req, res) => {
    const id = req.params.id;

    const foundFilm = films.find(
        function (films) {
           return films.id == id
        }
    )
    if (!foundFilm){
        res.status(404).render('404')
      }
    
      res.render('film', {foundFilm:foundFilm});
})

module.exports = router;