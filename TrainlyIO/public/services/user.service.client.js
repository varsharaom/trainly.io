
(function () {
        angular
            .module("WDP")
            .service('UserService',UserService);
        
        function UserService($http) {
            
            this.login=login;
            this.register=register;
            this.findUserByUsername=findUserByUsername;
            this.logout=logout;
            this.checkLoggedIn=checkLoggedIn;
            this.getCourses = getCourses;
            this.getCourseInfo = getCourseInfo;
            this.getEnrolledCourses = getEnrolledCourses;
            this.addCourse = addCourse;
            this.removeEnrolledCourse = removeEnrolledCourse;
            this.getTotalMoneySpent = getTotalMoneySpent;
            this.getInterestedCourses = getInterestedCourses;
            this.getCompletedCourses = getCompletedCourses;
            this.getEnrolledCoursesWithSecondaryTopics = getEnrolledCoursesWithSecondaryTopics;
            this.likeCourse = likeCourse;
            this.unlikeCourse = unlikeCourse;
            this.getLikedCourses = getLikedCourses;
            this.getReqFromAdmin = getReqFromAdmin;
            this.getReqFromFaculty = getReqFromFaculty;
            this.findIfAdmin = findIfAdmin;
            this.findIfFaculty = findIfFaculty;
            this.registerAdmin = registerAdmin;
            this.registerFaculty = registerFaculty;
            this.getCompletedCourseMaterials = getCompletedCourseMaterials;
            this.getInCompleteCourseMaterials = getInCompleteCourseMaterials;
            this.updateAdmin = updateAdmin;
            this.updateFaculty = updateFaculty;
            this.executeQuery5=executeQuery5;
            this.executeQuery4=executeQuery4;
            this.executeQuery3=executeQuery3;
            this.executeQuery2=executeQuery2;
            this.executeQuery1=executeQuery1;
            this.markAsCompleted=markAsCompleted;

            function markAsCompleted(comp) {
                var url = "/api/project/markAsCompleted";
                return $http.post(url,comp)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function executeQuery1(num){
                var url = "/api/project/executeQuery1/"+num;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function executeQuery2(){
                var url = "/api/project/executeQuery2";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function executeQuery3(date){
                var url = "/api/project/executeQuery3/"+date;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function executeQuery4(amt){
                var url = "/api/project/executeQuery4/"+amt;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function executeQuery5(){
                var url = "/api/project/executeQuery5";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function updateAdmin(email,grantor){
                var url = "/api/project/updateAdmin/";

                var data = {
                    email : email,
                    grantor: grantor
                };
                return $http.put(url, data)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function updateFaculty(email,grantor){

                // console.log("email"+email+" grantor "+grantor);
                 var url = "/api/project/updateFaculty/";
                // console.log("url is "+url);
                // console.log("/api/project/:email/updateFaculty/:grantor");

                var data = {
                    email : email,
                    grantor: grantor
                };

                return $http.put(url, data).then(function (response) {
                        console.log('response is ');
                        console.log(response);
                        return response.data;
                    },function(err){
                        console.log("error is"+err);
                    });
            }


            function getCompletedCourseMaterials(studentID,CourseID) {
                var url = "/api/project/user/"+studentID+"/getCompletedCourseMaterials/course/"+CourseID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function getInCompleteCourseMaterials(studentID,CourseID) {
                var url = "/api/project/user/"+studentID+"/getInCompleteCourseMaterials/course/"+CourseID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function registerAdmin(user) {
                var url = "/api/project/registerAdmin";
                return $http.post(url,user)
                    .then(function (response) {
                        return response.data;
                    });
            }
            function registerFaculty(faculty) {
                var url = "/api/project/registerFaculty";
                return $http.post(url,faculty)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function findIfAdmin(emailID) {
                var url = "/api/project/findIfAdmin/"+emailID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function findIfFaculty(emailID) {
                var url = "/api/project/findIfFaculty/"+emailID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }



            function getReqFromFaculty() {
                console.log("in client service gte eq from fac");
                var url = "/api/project/getReqFromFaculty/";
                return $http.get(url)
                    .then(function (response) {
                        console.log("response data"+response.data);
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function getReqFromAdmin() {
                console.log("in get req from admin client");
                var url = "/api/project/getReqFromAdmin/";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function getLikedCourses(StudentID) {
                var url = "/api/project/getLikedCourses/"+StudentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function likeCourse(course,StudentID) {
                var url = "/api/project/likeCourse/user/"+StudentID;
                return $http.post(url,course)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function unlikeCourse(courseId,StudentID) {
                var url = "/api/project/unlikeCourse/"+courseId+"/user/"+StudentID;
                return $http.delete(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function removeEnrolledCourse(StudentID,CourseID) {
                var url = "/api/project/user/"+StudentID+"/removeEnrolledCourse/"+CourseID;
                return $http.delete(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    })
            }

            function getEnrolledCoursesWithSecondaryTopics(studentID) {
                var url = "/api/project/getEnrolledCoursesWithSecondaryTopics/"+studentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function getCompletedCourses(studentID) {
                var url = "/api/project/getCompletedCourses/"+studentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function getInterestedCourses(studentID) {
                var url = "/api/project/getInterestedCourses/"+studentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }
            
            function getTotalMoneySpent(studentID) {
                var url = "/api/project/getTotalMoneySpent/"+studentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function addCourse(StudentID,CourseID,course) {
                var url = "/api/project/user/"+StudentID+"/addCourse/"+CourseID;
                return $http.post(url,null)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }
            
            function getEnrolledCourses(studentID) {
                var url = "/api/project/getEnrolledCourses/"+studentID;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }
            
            function getCourseInfo(courseId){
                var url = "/api/project/getCourseInfo/"+courseId;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function getCourses(){
                var url = "/api/project/getCourses";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function login(username,password) {
                var url = "/api/project/login";
                var credentials = {
                    username:username,
                    password:password
                };
                return $http.post(url, credentials)
                    .then(function (response) {
                        return response.data;
                    },function (err) {
                        console.log(err);
                    });
            }

            function register(user) {
                var url = "/api/project/register";
                return $http.post(url,user)
                    .then(function (response) {
                        return response.data;
                    })
            }
            
            function findUserByUsername(username) {
                var url = "/api/project/findUserByUsername?username="+username;
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }

            function logout() {
                var url = "/api/project/logout";
                return $http.post(url)
                    .then(function (response) {
                        return response.data;
                    });
            }
            
            function checkLoggedIn() {
                var url = "/api/project/checkLoggedIn";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }
        }
    }
    
)();