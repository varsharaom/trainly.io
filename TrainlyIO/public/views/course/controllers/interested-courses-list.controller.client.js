(
    function () {
        angular
            .module("WDP")
            .controller('interestedCoursesListCtrl', interestedCoursesListCtrl);

        function interestedCoursesListCtrl(UserService, $location, $routeParams, $sce,isLoggedIn,$route) {
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
                if(isLoggedIn.StudentID) {
                    model.userId = isLoggedIn.StudentID;
                    UserService
                        .getInterestedCourses(model.userId)
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