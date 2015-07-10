var app = angular.module('MyApp', [

]);
app.controller('MainCtrl', function($scope)
{
    $scope.data = {
        label : "My Button",
        class: "btn-default",
        house : "blue",
        dog: "dobermann",
        cat: "tabby"
    };
    $scope.list = ['01', '02', '03'];
});