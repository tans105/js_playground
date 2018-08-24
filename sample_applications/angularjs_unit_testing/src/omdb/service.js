angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';
        var apikey = 'ec0dce2';

        function httpPromise(url) {
            var deferred = $q.defer();
            $http.get(url)
                .success(function(data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        }

        service.search = function(query) {
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query) + '&apikey=' + apikey);
        };

        service.movieDataById = function(id) {
            return httpPromise(baseUrl + 'i=' + id + '&apikey=' + apikey);
        };


        return service;
    });