app.controller("SecondCtrl", function ($scope) {
    $scope.name = "Joe";
});
app.directive('walterwhite', function () {
    return {
        /*This ensures that the directive is restricted
        * to being an element*/
        restrict: 'E',
        /*This tells the directive that every time it is updated it
        * will overwrite itself*/
        transclude: true,
        /*This is what will be included in the directive*/
        template: '<h2>I Am Hiesenberg</h2>'

    }
});