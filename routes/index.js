var moviesJSON = require('../movies.json');


// home
exports.home = function(req, res){

  var movies = moviesJSON.movies;

  res.render('home', {
    title: "Star Wars Movies ",
    movies : movies
  });
};

// movie_single
exports.movie_single = function(req, res){

  var episode_number = req.params.episode_number;

  var movies = moviesJSON.movies;

  if (episode_number >= 1 && episode_number <= 6) {
    var movie = movies[episode_number -1];

    var title = movie.title;

    res.render('movie_single', {
      movies : movies,
      title : title,
      movie : movie
    });
  } else {
    res.send("This is not the page you are looking for.");
  }
};

// notFound

exports.notFound = function(req, res){
  res.send("This is not the page that you are looking for");
};
