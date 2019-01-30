(
    function () {
        angular
            .module("WDP")
            .controller('enrolledCourseListCtrl', enrolledCourseListCtrl);

        function enrolledCourseListCtrl(isLoggedIn, $location, $routeParams, $sce,UserService,$route) {
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
                    model.userId = model.isLoggedIn.StudentID;
                    UserService
                        .getEnrolledCoursesWithSecondaryTopics(model.userId)
                        .then(function (enrolledCourses) {
                            console.log(enrolledCourses);
                            model.courses = enrolledCourses;
                        },function (err) {
                            console.log(err);
                        });
                }
            }
            init();
        }
    }
)();