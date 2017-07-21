var myapp= angular.module("myNameListApp",[]);

myapp.controller("myctr", function($scope){
$scope.names=[{firstname:"Sejal",lastname:"Panchal", done: true},{firstname:"John",lastname:"Doe", done: true},
             {firstname:"Jane",lastname:"Doe", done: true}];
    
     $scope.call = function() {
       
    $scope.names.push({firstname:$scope.firstname, lastname:$scope.lastname,done:false});
         $scope.firstname="";
         $scope.lastname="";
   
  };
    
     $scope.delete = function() {
    var temp = $scope.names;
    $scope.names = [];
    angular.forEach(temp, function(name) {
      if (!name.done) $scope.names.push(name);
    });
  };

});
