
(function () {
    var app = angular.module("WDP");
    app.config(configuration);

    function configuration($routeProvider) {
         $routeProvider
            .when('/',{
                templateUrl:'views/home/templates/home2.view.client.html',
                controller:'homeCtrl',
                controllerAs:'model',
                resolve: { isLoggedIn: checkLoggedIn }
            })
            .when('/home',{
                templateUrl:'views/home/templates/home2.view.client.html',
                controller:'homeCtrl',
                controllerAs:'model',
                resolve: { isLoggedIn: checkLoggedIn }
            })
             .when('/login',{
                 templateUrl:'views/user/templates/login.view.client.html',
                 controller: 'loginCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/complexTasks',{
                 templateUrl:'views/user/templates/complex.view.client.html',
                 controller: 'complexTasksCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/course/offeredCourses',{
                 templateUrl:'views/course/templates/offered-courses.view.client.html',
                 controller:'offeredCoursesCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/course/currentlyEnrolled',{
                 templateUrl:'views/course/templates/enrolled-courses-list.view.client.html',
                 controller:'enrolledCourseListCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/course/:courseId',{
                 templateUrl:'views/course/templates/course-review.view.client.html',
                 controller:'courseReviewCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/course/enrolledCourse/:courseId',{
                 templateUrl:'views/course/templates/about-enrolled-courses.view.client.html',
                 controller:'aboutenrolledCourseCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/course/showCertificate/:courseId',{
                 templateUrl:'views/user/templates/cert.view.client.html',
                 controller:'certCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/interestedCourses',{
                 templateUrl:'views/course/templates/interested-courses-list.view.client.html',
                 controller:'interestedCoursesListCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/completedCourses',{
                 templateUrl:'views/course/templates/completed-courses-list.view.client.html',
                 controller:'completedcoursesListCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: checkLoggedIn }
             })
             .when('/profile',{
                 templateUrl: 'views/user/templates/profile.view.client.html',
                 controller: 'profileCtrl',
                 controllerAs:"model",
                 resolve: { isLoggedIn: resolveProfile }
             })
             .when('/user/enrolledlist',{
                 templateUrl:'views/user/templates/enrolledlist.view.client.html',
                 controller: 'profileCtrl',
                 controllerAs:'model',
                 resolve: { isLoggedIn: resolveProfile }
             })
        }


        function checkLoggedIn($q, $timeout, $http, $location, $rootScope,UserService) {
            var deferred = $q.defer();
            UserService
                .checkLoggedIn()
                .then(function (user) {
                    if(user==='0'){
                        console.log("unresolved user");
                        deferred.resolve({});
                        //$location.url('/');
                    }else{
                        console.log("resolved user");
                        deferred.resolve(user);
                    }
                });
            return deferred.promise;
        }


        function resolveProfile($q, $timeout, $http, $location, $rootScope,UserService) {
            var deferred = $q.defer();
            UserService
                .checkLoggedIn()
                .then(function (user) {
                    if(user==='0'){
                        deferred.reject({});
                        $location.url('/login');
                    }else{
                        console.log("resolved user");
                        deferred.resolve(user);
                    }
                },function (err) {
                    console.log("Error is ",err);
                });
            return deferred.promise;
        }



    }
)();