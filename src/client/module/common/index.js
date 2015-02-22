var common = angular.module('common', ['ui.router','core',"kendo.directives"]);

define([
	"client/module/common/config/directive",
	"client/module/common/config/service",
	"client/module/common/config/filter"
	],function(){
	var module={
		init:init
	};
	return module;

	function init(){
	}
});