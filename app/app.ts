/// <reference path='_all.ts' />
/**
* The main TodoMVC app module.
*
* @type {angular.Module}
*/
module app {
    'use strict';
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .directive('todoBlur', todos.todoBlur)
        .directive('todoFocus', todos.todoFocus)
        .service('todoStorage', todos.TodoStorage);
} 