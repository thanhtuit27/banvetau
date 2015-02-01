angular.module('core').directive('layoutDefaultMenu', function () {
    return {
        restrict: 'E',
        scope: {
        },
        templateUrl: '/client/layout/default/directive/menu/view.html',
        link: function ($scope, element, attrs) {
        	$scope.menus=[
        		{text:"Home", href:"/"},
        		{text:"Time Ve", href:"/timve"},
        		{text:"dat Cho", href:"/datcho"}
        	];
        }
    };
});