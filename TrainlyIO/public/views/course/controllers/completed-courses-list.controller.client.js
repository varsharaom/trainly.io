(
    function () {
        angular
            .module("WDP")
            .controller('completedcoursesListCtrl', completedcoursesListCtrl);

        function completedcoursesListCtrl($route,UserService,isLoggedIn, $location, $routeParams, $sce) {
            var model = this;
            model.isLoggedIn=isLoggedIn;

            model.logout = logout;
            function logout() {
                UserService
                    .logout()
                    .then(function () {
                        $location.url('/');
                    });
            }

            function init() {
                model.userId = isLoggedIn.StudentID;
                if(isLoggedIn.StudentID) {
                    UserService
                        .getCompletedCourses(model.userId)
                        .then(function (courses) {
                            console.log(courses);
                            model.courses = courses;
                        },function (err) {
                           console.log(err);
                        });
                }
            }
            init();
        }
    }
)();