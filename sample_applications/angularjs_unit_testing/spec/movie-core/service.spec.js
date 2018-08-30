describe('MovieCore', function() {
    var PopularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
    })

    beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    it('should create a new popular movie record', function() {

        var expectedData = function(data) {
            // dump(angular.mock.dump(data));
            return angular.fromJson(data).movieId === 'tt076759';
        }

        $httpBackend.expectPOST(/./, expectedData)
            .respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt076759',
            desc: 'wow!!'
        });

        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow(); //expection : not httpBackend.flush method should not throw an exception
    });

    it('should get movie by id', function() {

        $httpBackend.expectGET(function(url) {
            dump(url);
            return true;
        }).respond(200);

        PopularMovies.get({ 'movieId': 'tt076759' });

        expect($httpBackend.flush).not.toThrow();

    });

    it('should update the put request', function() {

    	$httpBackend.expectPUT('popular').respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt076759',
            desc: 'wow!!'
        });

        popularMovie.$update();

        expect($httpBackend.flush).not.toThrow();
    });

});