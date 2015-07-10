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
/*This controller will hold the array of names and the functions to add names to it*/
.controller('ShieldCtrl', function($scope){
    $scope.shieldNames = [];

    this.addReigns = function (){
        $scope.shieldNames.push("Roman Reigns: Juggernaut");
    };

    this.addRawlins = function (){
        $scope.shieldNames.push("Seth Rawlins: Architect");
    };

    this.addAmbrose = function (){
        $scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
    };

})

/*This creates theshield directive*/
.directive('theshield', function () {
    return{
        restrict: 'E',
        /*This isolates the scope to stop it being overwritten by
        * each function*/
        scope: {},
        controller: 'ShieldCtrl',
        link: function ($scope, $element, $attrs) {
            $element.bind('mouseenter', function () {
                console.log($scope.shieldNames);
            })
        }
    }
})

/*Attribute directives*/
.directive('reigns', function () {
   return {
       require: 'theshield',
       link: function ($scope, $element, $attrs, ShieldCtrl) {
           ShieldCtrl.addReigns();
       }
   }
})
.directive('rawlins', function () {
    return {
        require: 'theshield',
        link: function ($scope, $element, $attrs, ShieldCtrl) {
            ShieldCtrl.addRawlins();
        }
    }
})
.directive('ambrose', function () {
    return {
        require: 'theshield',
        link: function ($scope, $element, $attrs, ShieldCtrl) {
            ShieldCtrl.addAmbrose();
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