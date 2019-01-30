(function () {

    angular.module("WDP").controller('certCtrl',certCtrl);

    function certCtrl(UserService,isLoggedIn,$location,$route,$routeParams) {

        var model = this;
        model.logout = logout;
        model.courseId = $routeParams.courseId;
        model.date = new Date();

        function init() {
            model.user=model.isLoggedIn=isLoggedIn;
            model.firstName=model.user.Fname;
            model.lastName=model.user.Lname;
            UserService
                .getCourseInfo(model.courseId)
                .then(function (res) {
                    model.Name = res[0].Name;
                },function (err) {
                    console.log(err);
                })
        }init();


        function logout() {
            UserService
                .logout()
                .then(function () {
                    $location.url('/');
                });
        }

    }
})();