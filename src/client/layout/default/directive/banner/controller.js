angular.module('core').directive('layoutDefaultBanner', function () {
    return {
        restrict: 'E',
        scope: {
        },
        templateUrl: '/client/layout/default/directive/banner/view.html',
        link: function ($scope, element, attrs) {
            $scope.today="Sunday 2/5/2014";
        }
    };
});