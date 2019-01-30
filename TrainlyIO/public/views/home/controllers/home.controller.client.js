(function () {
    angular
        .module('WDP')
        .controller('homeCtrl',homeCtrl);
    
    function homeCtrl($scope,$routeParams,UserService,$location,isLoggedIn) {
        var model = this;
        model.bookmark = bookmark;
        model.removebookmark = removebookmark;

        $scope.complexClick = function () {
            $location.url('/complexTasks');
        };

        model.logout = logout;
        function logout() {
            UserService
                .logout()
                .then(function () {
                    // $window.location.href='/#!/home';
                    model.user=model.isLoggedIn=null;
                });
        }

        function init() {

            model.user=model.isLoggedIn=isLoggedIn;
            console.log(model.user.StudentID);
        }

        init();

        function bookmark(movieId) {
            UserService
                .checkLoggedIn()
                .then(function (user) {
                    if(user === "0"){
                        $location.url('/login');
                    }
                    else{
                        MovieService
                            .getConfig()
                            .then(function (configs) {
                                var baseURL = configs.images.secure_base_url + "";
                                var size = configs.images.profile_sizes[2];
                                var poster_config_path = baseURL + size;
                                MovieService
                                    .getMovie(movieId)
                                    .then(function (movie) {
                                        movie.poster_path = poster_config_path + movie.poster_path;
                                        UserService
                                            .addToWatchList(movie,user._id)
                                            .then(function (response) {
                                                model.watchListMovies.push(movieId);
                                            });
                                    });
                            });
                    }
                });
        }

        function removebookmark(movieId) {
            UserService
                .checkLoggedIn()
                .then(function (user) {
                    if(user === "0"){
                        $location.url('/login');
                    }
                    else{
                        UserService
                            .deleteMovie(movieId,isLoggedIn._id)
                            .then(function (response) {
                                for(m in model.watchListMovies) {
                                    if(model.watchListMovies[m] === movieId)
                                        model.watchListMovies.splice(m, 1);
                                }
                            })
                    }
                });
        }
    }
})();