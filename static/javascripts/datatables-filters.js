// global
// var ikrpg

var ikrpg = ikrpg || {};

(function () {
	'use strict';
	
	ikrpg.index = ikrpg.index || {};
	
	ikrpg.index.filter = {};
	
	ikrpg.index.filter.categories = function (category, subcategory) {
	  return function (obj) { return obj.category == category && obj.subcategory == subcategory; };
	}
	
	ikrpg.index.filter.publication = function (publication) {
	  return function (obj) { return obj.publication == publication; };
	}
})();