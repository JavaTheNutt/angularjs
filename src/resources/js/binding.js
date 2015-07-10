var app = angular.module('MyApp', [

]);
app.controller('MainCtrl', function($scope)
{
    $scope.data = {
        label : "My Button",
        class: "btn-danger"
    };
    $scope.list = ['01', '02', '03'];
});