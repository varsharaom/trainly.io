
(function () {
    angular
        .module("WDP")
        .controller('aboutenrolledCourseCtrl',aboutenrolledCourseCtrl);

    function aboutenrolledCourseCtrl($location,$routeParams,$sce,isLoggedIn,UserService,$route,$scope) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.user=model.isLoggedIn=isLoggedIn;
        model.userId = isLoggedIn.StudentID;

        $scope.markAsComplete=function(material,index){

            $scope.incompleteMaterials.splice(index,1);


            var currentDate=new Date();
            var pmonth=currentDate.getMonth();
            pmonth=pmonth+1;
            var pdate=currentDate.getFullYear()+"-"+
                pmonth +"-"+
                currentDate.getDate();

            var ptime=currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();



            var newcourse={
                CourseID:   model.courseId,
                Date:pdate,
                MaterialName:material.incomplete,
                StudentID:isLoggedIn.StudentID,
                Time:ptime
            };

            UserService.markAsCompleted(newcourse).then(function(data){
                console.log("markcoml"+data);
                var obj = {
                  order: material.order,
                    completes:newcourse.MaterialName
                };
                $scope.completedMaterials.push(obj);
                console.log("Completed materials"+JSON.stringify($scope.completedMaterials));
            },function(err){
                console.log("error"+err);
            });
        };

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
                .getCompletedCourseMaterials(model.userId,model.courseId)
                .then(function (response) {
                    console.log("The response is "+JSON.stringify(response));
                    var completedCourseMaterials = [];
                    var incompletedCourseMaterials = [];
                    var completes_list = [];
                    var incomplete_list = [];
                    for(i in response) {
                        var completed_course = {
                            order: response[i].FinishedMaterialOrder,
                            completes: response[i].completes
                        };
                        if(completes_list.length === 0)
                            completes_list.push(completed_course.completes);
                        else if(completes_list.indexOf(response[i].completes)!=-1)
                            continue;
                        completedCourseMaterials.push(completed_course);
                        completes_list.push(response[i].completes);
                    }
                    model.completedMaterials =  completedCourseMaterials;
                    $scope.completedMaterials = model.completedMaterials;
                },function (err) {
                    console.log(err);
                });

            UserService
                .getInCompleteCourseMaterials(model.userId,model.courseId)
                .then(function (response) {
                    console.log("The response is "+JSON.stringify(response));
                    var incompletedCourseMaterials = [];
                    var incomplete_list = [];

                    for(i in response) {
                        var incomplete_course = {
                                    order:response[i].CourseOrder,
                                    incomplete:response[i].unfinished
                                };

                        if(incomplete_list.length === 0)
                            incomplete_list.push(response[i].unfinished);
                        else if(incomplete_list.indexOf(response[i].unfinished)!=-1)
                            continue;
                        incomplete_list.push(response[i].unfinished);
                        incompletedCourseMaterials.push(incomplete_course);
                    }
                    model.incompleteMaterials = incompletedCourseMaterials;
                    $scope.incompleteMaterials = model.incompleteMaterials;
                },function (err) {
                    console.log(err);
                });

                    UserService
                        .getCourseInfo(model.courseId)
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
                                    order:response[i].CourseOrder,
                                    completed:0
                                };
                                courseMaterials.push(model.CourseMaterial);
                            }
                            model.courseMaterials = courseMaterials;
                        })
        }

        init();
    }

})();