var app = angular.module('MyApp', [

]);
app.controller('MainCtrl', ['$scope', function($scope)
{
    $scope.data = {
        label : "My Button"
    }
}]);