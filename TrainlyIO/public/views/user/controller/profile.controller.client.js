(function () {
    
    angular.module("WDP").controller('profileCtrl',profileCtrl);
    
    function profileCtrl(UserService,isLoggedIn,$location,$route,$scope,$rootScope) {

        var model = this;
        model.deleteMovie = deleteMovie;
        model.deleteLikedMovie = deleteLikedMovie;
        model.user=model.isLoggedIn=isLoggedIn;
        model.profilePic='';
        model.logout = logout;
        model.curUrl = $location.path();
        model.deleteUser=deleteUser;
        model.updateUser=updateUser;
        model.unfollow=unfollow;
        model.viewPerson=viewPerson;
        model.gotoFollowingPerson=gotoFollowingPerson;
        model.gotoFollower=gotoFollower;
        model.username=model.user.username;
        model.email=model.user.email;
        model.firstName=model.user.firstName;
        model.lastName=model.user.lastName;
        model.checkPassword=checkPassword;
        model.changePassword=changePassword;
        model.searchMovie = searchMovie;
        model.editReview = editReview;
        model.deleteReview = deleteReview;
        model.submitReview = submitReview;
        model.cancel = cancel;
        model.selectReview = selectReview;

        $scope.confirmPerson=function(email,role, index){
            console.log("conf person"+role);
            console.log("isLoggedIn.StudentID"+isLoggedIn.StudentID);
            $scope.pendingRequests.splice(index, 1);
            if(role=='faculty'){
                console.log("update faculty");
                /*var updatedUser={
                 "FacultyID":isLoggedIn.StudentID,
                 "FacultyEmail":isLoggedIn.StudentEmail,
                 "Fname":isLoggedIn.Fname,
                 "Lname":isLoggedIn.Lname,
                 "Password":""}*/

                UserService.updateFaculty(email,isLoggedIn.StudentID).then(function(data){
                    console.log("update data"+data);

                },function(err){
                    console.log("update fac "+err);
                });
            }

            if(role=='admin'){
                UserService.updateAdmin(email,isLoggedIn.StudentID).then(function(data){
                    console.log(data);

                },function(err){
                    console.log("update admin "+err);
                });
            }

        };

        $scope.getAllPendingRequests = function () {
            console.log("get pending");
            $scope.pendingRequests = [];
            UserService.getReqFromFaculty().then(function (data) {
                console.log("data get fac"+ data);
                console.log("jsjjsjs"+JSON.stringify(data));
                for (var i = 0; i < data.length; i++) {
                    $scope.pendingRequests.push({
                        "email": data[i].FacultyEmail,
                        "name": data[i].Fname + " " + data[i].Lname,
                        "role": "faculty",
                        "website": data[i].Website,
                        "affiliation": data[i].Affiliation,
                        "title": data[i].Title

                    });
                }

            }, function (err) {
                model.loginErrors.notFound = "User Not Found"
                console.log(err);
            });

            UserService.getReqFromAdmin().then(function (data) {
                console.log("lol" + data);
                for (var i = 0; i < data.length; i++) {
                    $scope.pendingRequests.push({
                        "email": data[i].AdminEmail,
                        "name": data[i].Fname + " " + data[i].Lname,
                        "role": "admin",
                        "website": "",
                        "affiliation": "",
                        "title": ""

                    });
                }

            }, function (err) {
                console.log("err" + err);
            });
        };



        $scope.viewPending=function(){
            console.log("in view pending");

                $scope.getAllPendingRequests();

        };


        console.log("profile cond");
        var newFaculty;

        $scope.confirmFacultyReq=function(){
            console.log("conf faculty");
            console.log("dc"+document.getElementById("facAff").value);
            UserService.findUserByUsername($rootScope.currUser).then(function(data){
                console.log(data);
                var student=data[0];

                console.log("$scope.facAff"+$scope.facAff);

                newFaculty={
                    FacultyId:student.StudentID,
                    FacultyEmail:student.StudentEmail,
                    Fname:student.Fname,
                    Lname:student.Lname,
                    Password:student.Password,
                    ProfilePic:student.ProfilePic,
                    Street:student.Street,
                    City:student.City,
                    Country:student.Country,
                    PostalCode:student.PostalCode,
                    Affiliation:document.getElementById("facAff").value,
                    Website:document.getElementById("facWebsite").value,
                    Title:document.getElementById("facTitle").value



                };
                console.log("new fac ew"+newFaculty);
                return UserService
                    .registerFaculty(newFaculty)
                    .then(function (user) {
                        console.log("user is added");
                        // $location.url('/profile');
                    },function (err) {
                        console.log("Not able to register user");
                        console.log("Error in userbyusername"+err);
                    });

            });
        }

        $scope.confirmAdminReq=function(){
            console.log("conf admin");

            UserService.findUserByUsername($rootScope.currUser).then(function(data){
                console.log(data);
                var student=data[0];


                newAdmin={
                    AdminId:student.StudentID,
                    AdminEmail:student.StudentEmail,
                    Fname:student.Fname,
                    Lname:student.Lname,
                    Password:student.Password,
                    ProfilePic:student.ProfilePic,
                    Street:student.Street,
                    City:student.City,
                    Country:student.Country,
                    PostalCode:student.PostalCode




                };
                console.log("new fac ew"+newAdmin);
                return UserService
                    .registerAdmin(newAdmin)
                    .then(function (user) {
                        console.log("admin  is added to table");
                        // $location.url('/profile');
                    },function (err) {
                        console.log("Not able to register user");
                        console.log("Error in userbyusername"+err);
                    });

            },function(err){
                console.log("err is userbyname"+JSON.stringify(err));
            });


        }
        // $scope.confirmFacultyReq=function(){
        //     console.log("conf faculty");
        //
        //     console.log("rtscp.currUser"+$rootScope.currUser);
        //     UserService.findUserByUsername($rootScope.currUser).then(function(data){
        //         console.log("mydta"+JSON.stringify(data[0]));
        //
        //         var student=data[0];
        //
        //
        //         newFaculty={
        //             FacultyId:student.StudentID,
        //             FacultyEmail:student.StudentEmail,
        //             Fname:student.Fname,
        //             Lname:student.Lname,
        //             Password:student.Password,
        //             ProfilePic:student.ProfilePic,
        //             Street:student.Street,
        //             City:student.City,
        //             Country:student.Country,
        //             PostalCode:student.PostalCode,
        //             Affiliation:$scope.facAff,
        //             Website:$scope.facWebsite,
        //             Title:$scope.facTitle
        //
        //
        //
        //         };
        //         console.log("new fac ew"+JSON.stringify(newFaculty));
        //         return UserService
        //             .registerFaculty(newFaculty)
        //             .then(function (user) {
        //                 console.log("user is added");
        //                 // $location.url('/profile');
        //             },function (err) {
        //                 console.log("Not able to register user");
        //                 console.log("Error in userbyusername"+err);
        //             });
        //
        //     });
        // };
        //
        // $scope.confirmAdminReq=function(){
        //     console.log("conf admin");
        // };




        function init() {
            model.userId = isLoggedIn.StudentID;
            // console.log("User id ",model.userId);
            //
            // UserService
            //     .getUserReviews(model.userId)
            //     .then(function (userreviews) {
            //         model.userreviews = userreviews;
            //     });
            UserService
                .getTotalMoneySpent(model.userId)
                .then(function (result) {
                    model.totalCost = result[0].total_cost;
                },function (err) {
                    console.log(err);
                });

            UserService
                .getEnrolledCourses(model.userId)
                .then(function (enrolledCourses) {
                    if(enrolledCourses.length>0)
                        model.movies = enrolledCourses;
                },function (err) {
                        console.log(err);
                });
            // UserService
            //     .getMoviesFromWatchList(model.userId)
            //     .then(function (movies) {
            //         if(movies.length>0)
            //             model.movies = movies;
            //     });
            //
            // UserService
            //     .getLikedMovies(model.userId)
            //     .then(function (likedmovies) {
            //         if(likedmovies.length>0)
            //             model.likedmovies = likedmovies;
            //     });
            //
            //     UserService
            //         .getFollowings(model.userId)
            //         .then(function (following) {
            //             return  model.following=model.user.following=following;
            //         });
            //
            //
            //     UserService
            //         .getFollowers(model.userId)
            //         .then(function (followers) {
            //             return  model.followers=model.user.followers=followers;
            //         });
        }init();

        function searchMovie(query) {
            $location.url('/movie/search/'+query);
        }

        function logout() {
            UserService
                .logout()
                .then(function () {
                    $location.url('/');
                });
        }

        function deleteUser(user) {
            UserService
                .unregisterUser(user)
                .then(function (response) {
                    $location.url('/login');
                },function (err) {
                    console.log(err);
                });
        }
        function updateUser() {
            UserService
                .updateUser(model.user._id,model.user)
                .then(function (status) {
                    model.updateSuccess='Profile Updated';
                });
        }

        function deleteMovie(movieId) {
            UserService
                .deleteMovie(movieId,model.userId)
                .then(function (response) {
                    for(var i in model.movies){
                        var movie = model.movies[i];
                        if(movieId === movie.id){
                            return model.movies.splice(i,1);
                        }
                    }
                    // $location.url('/user/watchlist');
                });
        }

        function deleteLikedMovie(movieId) {
            UserService
                .unlikeMovie(movieId,model.userId)
                .then(function (response) {
                    // console.log(response);
                    for(var i in model.likedmovies){
                        var movie = model.likedmovies[i];
                        if(movieId === movie.id){
                            return model.likedmovies.splice(i,1);
                        }
                    }




                    // UserService
                    //     .getLikedMovies(model.userId)
                    //     .then(function (movies) {
                    //         if(movies.length>0)
                    //             model.movies = movies;
                    //     });
                    // $location.url('/user/watchlist');
                });
        }


        function unfollow(followeeId) {
            var followerId= model.user._id;
            UserService.unfollow(followeeId,followerId).then(function () {

                for(var i in model.user.following){
                    var following = model.user.following[i];
                    if(following._id===followeeId){
                        return model.user.following.splice(i,1);
                    }
                }
            })
        }

        function viewPerson(id) {
            model.watchingProfile = id;
        }

        function gotoFollowingPerson(personId) {
            for(var i in model.following){
                var person=model.following[i];
                if(personId === person._id){
                    model.person = person;
                    $location.url('/user/view_person/'+personId);
                }
            }
        }

        function gotoFollower(personId) {
            for(var i in model.followers){
                var person=model.followers[i];
                if(personId === person._id){
                    model.person = person;
                    $location.url('/user/view_person/'+personId);
                }
            }
        }

        function checkPassword() {

                return model.pwdMismatch='';
        }

        function changePassword(newPwd,oldPwd) {
            if(newPwd !== model.confirmPwd){
                return model.pwdMismatch=true;
            }
            UserService
                .changePassword(model.user._id,newPwd,oldPwd)
                .then(function (response) {

                    if(response ==='OK'){
                        model.pwdUpdateSuccess='Password Updated';
                    }
                    else{
                        model.pwdUpdateFailure=response;
                    }

                });
        }

        function submitReview(rating,userreview) {

            if (!model.user._id) {
                $location.url('/login');
            }
            else {
                if (rating === undefined || userreview === undefined) {
                    model.error = "Please enter  a review and a rating";
                }
                else {
                    model.error='';
                    MovieService
                        .getMovie(model.movieId)
                        .then(function (movie) {
                            UserService
                                .submitReview(isLoggedIn._id, model.movieId, rating,
                                    userreview, isLoggedIn.username,movie.title)
                                .then(function (response) {
                                    model.rating2 = "";
                                    model.userreview = "";
                                    UserService
                                        .getUserReviews(userId)
                                        .then(function (reviews) {
                                            model.userreviews = reviews;
                                        });
                                }, function (err) {
                                    console.log(err);
                                });
                        });
                }
            }
        }


        function cancel() {
            model.selectedId = false;
        }

        function selectReview(reveiewId,text) {
            model.selectedId = reveiewId;
            model.text2 = text;
        }


        function editReview(reviewId,rating,text) {
            var review = {
                rating:rating,
                text:text
            };
            UserService
                .editReview(reviewId, review)
                .then(function (response) {
                    for(m in model.userreviews){
                        if(model.userreviews[m]._id === reviewId){
                            model.userreviews[m].text= typeof review.text==='undefined' ? model.userreviews[m].text :text ;
                            model.userreviews[m].rating=typeof review.rating==='undefined'?model.userreviews[m].rating :rating ;
                            break;
                        }
                    }
                    model.selectedId = false;
                })
        }

        function deleteReview(userId,reviewId) {
            UserService
                .deleteReview(userId,reviewId)
                .then(function (response) {
                    UserService
                        .getUserReviews(userId)
                        .then(function (reviews) {
                            model.userreviews = reviews;
                        });
                })
        }
    }
})();