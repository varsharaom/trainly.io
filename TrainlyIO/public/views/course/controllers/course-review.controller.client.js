
(function () {
    angular
        .module("WDP")
        .controller('courseReviewCtrl',courseReviewCtrl);

    function courseReviewCtrl($location,$routeParams,$sce,isLoggedIn,UserService,$route) {
        var model = this;
        model.movieId = $routeParams.movieId;
        model.user=model.isLoggedIn=isLoggedIn;
        model.userId = isLoggedIn.StudentID;

        model.logout = logout;
            function logout() {
                UserService
                    .logout()
                    .then(function () {
                        $location.url('/');
                    });
            }

        function init() {
                    UserService
                        .getCourseInfo(model.movieId)
                        .then(function (response) {
                            var courseMaterials = [];
                            for(i in response){
                                model.Name = response[i].Name;
                                model.Icon = response[i].Icon;
                                model.Cost = response[i].Cost;
                                model.Description = response[i].Description;
                                model.CourseID = response[i].CourseID;
                                model.CourseMaterial = {
                                    materialName:response[i].MaterialName,
                                    order:response[i].CourseOrder
                                };
                                courseMaterials.push(model.CourseMaterial);
                            }
                            model.courseMaterials = courseMaterials;
                        })
        }

        init();
    }

})();