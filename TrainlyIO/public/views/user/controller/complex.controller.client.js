(function ($) {

    angular.module("WDP").controller('complexTasksCtrl',complexTasksCtrl);

    function complexTasksCtrl(UserService,isLoggedIn,$location,$route,$scope,$rootScope){
        console.log("complex ctrl");
//location.reload();
//window.reload();
        $scope.executeq1=function(){
            var num =  document.getElementById("num").value;
            UserService.executeQuery1(num).then(function(data){
                console.log("data in complex tasks "+JSON.stringify(data));
                $scope.resq1=[];
                if(data!=null){
                    for(var i=0;i<data.length;i++){
                        $scope.resq1.push(
                            {
                                name:data[i].CourseName,
                                materials:data[i].Materials,
                                students_completed:data[i].StudentsCompleted
                            }
                        )
                    }
                }
                $('#Modal1').modal('show');
            },function(error){
                console.log(err);
            });
        };

        $scope.executeq2=function(){
            UserService.executeQuery2().then(function(data){
                console.log("data in complex tasks "+JSON.stringify(data));
                $scope.resq2=[];
                if(data!=null){
                   for(var i=0;i<data.length;i++){
                       $scope.resq2.push(
                           {
                               name:data[i].name,
                               interested_students:data[i].interested_students
                           }
                       )
                   }
                }
                $('#Modal2').modal('show');
            },function(error){
                console.log(err);
            });
        };

        $scope.executeq3=function(){
            var dte = document.getElementById("date").value;
            UserService.executeQuery3(dte).then(function(data){
                console.log("data in complex tasks "+JSON.stringify(data));
                $scope.res=[];
                if(data!=null){
                    for(var i=0;i<data.length;i++){
                        $scope.res.push({
                                course:data[i].course,
                            name:data[i].Name,
                            emailid:data[i].EmailID,
                            cost:data[i].Cost,
                            students_completed:data[i].Students_Completed


                        });
                    }
                }
                $('#Modal3').modal('show');
            },function(error){
                console.log(err);
            });
        };

        $scope.executeq4=function(amt){
            UserService.executeQuery4(amt).then(function(data){
                console.log("data in complex tasks "+JSON.stringify(data));
                $scope.names=[];
                if(data!=null){
                    for(var i=0;i<data.length;i++){
                        $scope.names.push(data[i].Name);
                    }

                }
                $('#Modal4').modal('show');
            },function(error){
                console.log(err);
            });
        };

        $scope.executeq5=function(){
            UserService.executeQuery5().then(function(data){
                console.log("data in complex tasks "+JSON.stringify(data));
                $scope.revenue="";
                if(data!=null){
                    $scope.revenue="$"+data[0].TotalRevenue;
                }
                $('#Modal5').modal('show');
            },function(error){
                console.log(err);
            });
        };
    }
})(jQuery);