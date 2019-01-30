(
    function () {

        angular.module("WDP").controller('loginCtrl',loginCtrl);

        function loginCtrl(UserService,$location,$scope,$rootScope) {
           // $rootScope.isAdmin=1;
           // $rootScope.isFaculty=0;
            var model = this;
            //model.isLoggedIn=isLoggedIn;
            model.login=login;
            model.register = register;
            model.changeTab= changeTab;
            model.checkPassword=checkPassword;
            // model.currentTab='register';
            model.loginErrors={

            };
            model.registerErrors={

            };
            // function init() {
            //     model.currentTab='login';
            // }init();

            function changeTab(tab) {
               if(tab==='login'){
                   model.registerErrors={};
               }
               else{
                   model.loginErrors={};
               }
                // console.log(model.currentTab);
            }

            function login(uname,pwd){

                //var found = UserService.findUserByCredentials(uname,pwd);
                //UserService.findUserByCredentials(uname,pwd)
                console.log("uname  .."+uname);
                UserService.login(uname,pwd)
                    .then(function (found) {
                        if(found!==null||found!="") {
                            console.log("found after login"+JSON.stringify(found));
                            UserService.findIfAdmin(uname).then(function(found1){
                                console.log("foud="+JSON.stringify(found1));
                                console.log("wiht out strinfigy "+found1);
                               //if(found!==null||found!==""||found!=null)
                                if(found1 == null || found1 == undefined || found1==""){
                                    $rootScope.isAdmin=0;
                                    $rootScope.x=0;
                                }
                                else
                                {
                                    console.log("inside is admin");
                                    $rootScope.isAdmin=1;
                                    $rootScope.x=1;


                                }
                                console.log("x val"+$rootScope.x);
                                console.log("am in admin "+$rootScope.isAdmin);
                            },function (err) {
                                console.log("Error in findifadmin "+err);
                            });

                            UserService.findIfFaculty(uname).then(function(found2){
                                console.log("foud faculty="+JSON.stringify(found2));
                               /* if(found!==null||found!=""||found!=null)*/
                               if(found2 === "" || found2.equals("")){
                                   $rootScope.isFaculty =0;
                               }else{
                                   $rootScope.isFaculty =1;
                               }
                                console.log("isfaculty "+$rootScope.isFaculty);
                            },function (err) {
                                console.log("Error in findiffac "+err);
                            });






                            $rootScope.currUser=uname;

                            $location.url('/profile');
                        }
                        // if(found!==null){
                        //     console.log("found");
                        //     if(found.role.indexOf('admin')!==-1){
                        //         $location.url('admin/dashboard');
                        //     }else{
                        //         console.log("found");
                        //         $location.url('/profile');
                        //     }
                        //
                        // }
                        else{
                            model.loginErrors.notFound='User not found';
                        }
                    },function (err) {
                        console.log(err);
                    });


            }

            // function login(uname,pwd){
            //
            //     //var found = UserService.findUserByCredentials(uname,pwd);
            //     //UserService.findUserByCredentials(uname,pwd)
            //     UserService.login(uname,pwd)
            //         .then(function (found) {
            //             if(found!=null) {
            //                 console.log("found");
            //                 $location.url('/profile');
            //             }
            //             // if(found!==null){
            //             //     console.log("found");
            //             //     if(found.role.indexOf('admin')!==-1){
            //             //         $location.url('admin/dashboard');
            //             //     }else{
            //             //         console.log("found");
            //             //         $location.url('/profile');
            //             //     }
            //             //
            //             // }
            //             else{
            //                 model.loginErrors.notFound='User not found';
            //             }
            //         },function (err) {
            //             model.loginErrors.notFound="User Not Found"
            //             console.log(err);
            //         });
            //
            //
            // }

            function checkPassword() {
                if(model.rvpwd === model.rpwd){
                    model.pwdMismatch='';
                }
            }


            function register(fusername,lusername,email,password,verifyPassword,street,city,country,pcode){

                if(password === null || typeof password==='undefined'||
                    verifyPassword === null || typeof verifyPassword==='undefined'){
                    model.error="All fields are required";
                    return;
                }
                if(password!==verifyPassword ){
                    model.pwdMismatch="Password does not match";
                    return;
                }

                UserService.findUserByUsername(email)
                    .then(
                        function (user) {
                            if(user)
                            {
                                model.registerErrors.usernameTaken = "sorry, username already taken.";
                            }
                            else{
                                var newUser={
                                    //username:username,
                                    fusername:fusername,
                                    lusername:lusername,
                                    password: password,
                                    email:email,
                                    street:street,
                                    city:city,
                                    country:country,
                                    pcode:pcode
                                    // role:'student'
                                };
                                return UserService
                                    .register(newUser)
                                    .then(function (user) {
                                        console.log("user is added");
                                        $location.url('/profile');
                                    },function (err) {
                                        console.log("Not able to register user");
                                        console.log("Error in userbyusername"+err);
                                    });
                            }

                        },
                        function(){
                        })

            }
        }   
    }
)();