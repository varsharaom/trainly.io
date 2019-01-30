(function () {
        angular
            .module("WDP")
            .controller('offeredCoursesCtrl', offeredCoursesCtrl);

        function offeredCoursesCtrl($route,UserService,$location, $routeParams, $sce,isLoggedIn) {
            var model = this;
            model.isLoggedIn=isLoggedIn;
            model.enroll = enroll;
            model.removeenroll = removeenroll;
            model.likeCourse = likeCourse;
            model.unlikeCourse = unlikeCourse;

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
                UserService
                    .getCourses()
                    .then(function (Courses) {
                        model.courses = Courses;
                    });

                if(isLoggedIn.StudentID) {
                    UserService
                        .getEnrolledCourses(model.userId)
                        .then(function (enrolledCourses) {
                                    var CourseIds = [];
                                    for (m in enrolledCourses)
                                        CourseIds.push(enrolledCourses[m].CourseID);
                                    model.enrolledCourses = CourseIds;
                        },function (err) {
                            console.log(err);
                        });

                    UserService
                        .getLikedCourses(model.userId)
                        .then(function (courses) {
                            var CourseIds = [];
                            for (m in courses)
                                CourseIds.push(courses[m].CourseID);
                            model.likedCourses = CourseIds;
                            console.log("liked Courses "+model.likedCourses);
                        },function (err) {
                            console.log(err);
                        })
                }
            }
            init();

            function enroll(CourseID) {
                UserService
                    .checkLoggedIn()
                    .then(function (user) {
                        if(user === "0"){
                            $location.url('/login');
                        }
                        else{
                            UserService
                                .getCourseInfo(CourseID)
                                .then(function (course) {
                                    UserService
                                        .addCourse(model.userId,CourseID,course)
                                        .then(function (success) {
                                            console.log(success);
                                            if(success){
                                                console.log("Successfully added course");
                                                if(model.enrolledCourses === undefined)
                                                    model.enrolledCourses = CourseID;
                                                else
                                                    model.enrolledCourses.push(CourseID);
                                            }
                                        },function (err) {
                                            console.log(err);
                                        })
                                },function (err) {
                                   console.log(err);
                                });
                        }
                    });
            }

            function removeenroll(courseID) {
                UserService
                    .checkLoggedIn()
                    .then(function (user) {
                        if(user === "0"){
                            $location.url('/login');
                        }
                        else{
                            model.userId = isLoggedIn.StudentID;
                            UserService
                                .removeEnrolledCourse(model.userId,courseID)
                                .then(function (res) {
                                    console.log("removed the user from the enrolled course");
                                    if(model.enrolledCourses.length === 1)
                                        model.enrolledCourses = [];
                                    else {
                                        for (m in model.enrolledCourses) {
                                            if (model.enrolledCourses[m] === courseID)
                                                model.enrolledCourses.splice(m, 1);
                                        }
                                    }
                                },function (err) {
                                    console.log(err);
                                });
                        }
                    });
            }

            function likeCourse(courseId) {
                UserService
                    .checkLoggedIn()
                    .then(function (user) {
                        if(user === "0"){
                            $location.url('/login');
                        }
                        else {
                            model.userId = isLoggedIn.StudentID;
                            var course = {CourseID:courseId};
                            UserService
                                .likeCourse(course,model.userId)
                                .then(function (res) {
                                    if(model.likedCourses === undefined)
                                        model.likedCourses = courseId;
                                    else
                                        model.likedCourses.push(courseId);
                                },function (err) {
                                    console.log(err);
                                });
                        }
                    });
            }

            function unlikeCourse(courseId) {
                model.userId = isLoggedIn.StudentID;
                UserService
                    .unlikeCourse(courseId,model.userId)
                    .then(function (res) {
                        if(model.likedCourses.length === 1)
                            model.likedCourses = [];
                        else {
                            for (m in model.likedCourses) {
                                if (model.likedCourses[m] === courseId)
                                    model.likedCourses.splice(m, 1);
                            }
                        }
                    },function (err) {
                        console.log(err);
                    })
            }

        }
    }
)();