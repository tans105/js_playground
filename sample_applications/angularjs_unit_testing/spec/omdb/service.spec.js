describe('omdb service', function() {
    var movieData = { "Search": [{ "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "imdbID": "tt0076759", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "imdbID": "tt0080684", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode VI - Return of the Jedi", "Year": "1983", "imdbID": "tt0086190", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Star Wars: The Force Awakens", "Year": "2015", "imdbID": "tt2488496", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode I - The Phantom Menace", "Year": "1999", "imdbID": "tt0120915", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode III - Revenge of the Sith", "Year": "2005", "imdbID": "tt0121766", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode II - Attack of the Clones", "Year": "2002", "imdbID": "tt0121765", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" }, { "Title": "Rogue One: A Star Wars Story", "Year": "2016", "imdbID": "tt3748528", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg" }, { "Title": "Star Wars: The Last Jedi", "Year": "2017", "imdbID": "tt2527336", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg" }, { "Title": "Solo: A Star Wars Story", "Year": "2018", "imdbID": "tt3778644", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg" }], "totalResults": "429", "Response": "True" };
    var movieDataById = { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.6/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "90/100" }], "Metascore": "90", "imdbRating": "8.6", "imdbVotes": "1,068,163", "imdbID": "tt0076759", "Type": "movie", "DVD": "21 Sep 2004", "BoxOffice": "N/A", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-iv/", "Response": "True" };
    var omdbApi = {};
    var $httpBackend;

    beforeEach(module('omdb'));
    beforeEach(inject(function(_omdbApi_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        omdbApi = _omdbApi_;
    }));

    it('should return a movie data', function() {
        var response;
        // var service = {
        //  search: function(query){
        //      return movieData;
        //  }
        // };


        /**Method 1**/

        // angular.mock.module({
        //  'omdbApi':{
        //      search: function(query){
        //          return movieData;
        //      }
        //  }
        // });

        // *Method 2** Using $provider directive/

        // angular.mock.module(function($provide) {
        //     $provide.factory('omdbApi', function() {
        //         return {
        //             search: function(query) {
        //                 return movieData;
        //             }
        //         };
        //     });
        // });

        /**Method 3** Using factory created from src**/
        // console.log(angular.mock.dump(movieData));

        var expectedUrl = function(url) {
            return url.indexOf('http://www.omdbapi.com/') !== -1;
        }

        $httpBackend.when('GET', expectedUrl)
            .respond(200, movieData);


        omdbApi.search('star wars')
            .then(function(data) {
                // dump(angular.mock.dump(data));
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieData);


    });

    it('should handle http error',function(){
        var response;

        var expectedUrl = function(url) {
            return url.indexOf('http://www.omdbapi.com/') !== -1;
        }

        $httpBackend.expect('GET', expectedUrl)
            .respond(500);


        omdbApi.movieDataById('tt0076759')
            .then(function(data) {
                response = data;
            })
            .catch(function(){
                response = 'Error!';
            });

        $httpBackend.flush();

        expect(response).toEqual('Error!');
    });

    it('should return movie data by id', function() {
        var response;

        var expectedUrl = function(url) {
            return url.indexOf('http://www.omdbapi.com/') !== -1;
        }

        $httpBackend.expect('GET', expectedUrl)
            .respond(200, movieDataById);


        omdbApi.movieDataById('tt0076759')
            .then(function(data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieDataById);
    });
});