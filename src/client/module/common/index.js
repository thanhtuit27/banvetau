var common = angular.module('common', ['ui.router','core']);

define([
	"client/module/common/config/directive",
	"client/module/common/config/service"
	],function(){
	var module={
		init:init
	};
	return module;

	function init(){
	}
});