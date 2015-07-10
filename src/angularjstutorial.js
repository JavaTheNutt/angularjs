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

app.controller("SecondCtrl", function ($scope) {
    $scope.name = "Joe";
});
/*The name of this directive is hyphenated in the html file
* but angular reads it as camel case so it must be camel
* cased here*/
app.directive('interactiveButton', function () {
    return{
        /*This will restrict the directive to being an attribute*/
        restrict : 'A',
        link: function ($scope, $element, $attr) {
            $element.bind('mouseenter', function () {
                console.log($element);
                /*Change the innerHTML*/
                $element[0].innerHTML = "Rolled Over";
            });
            $element.bind('mouseleave', function () {
                $element[0].innerHTML ="Click Me";
            });
        }
    }
})

.directive('walterwhite', function () {
    return{
        restrict: 'E',
        transclude: true,
        link : function ($scope, $element, $attr) {
            /*console.log($scope);
            console.log($element);
            console.log($attr);*/
        }
    };
});