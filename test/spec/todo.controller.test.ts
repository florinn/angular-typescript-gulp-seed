/// <reference path='../setup.ts' /> 

describe('Todo controller', () => {

    var ctrlCtor: ng.IControllerService;
    var scope: todos.ITodoScope;
    var location: ng.ILocationService;
    var todoStorage: todos.ITodoStorage;
    var filterFilter;

    var todoCtrl: todos.TodoCtrl;

    beforeEach(module('todomvc'));

    beforeEach(inject((
        $controller: ng.IControllerService,
        $rootScope: ng.IRootScopeService,
        $location: ng.ILocationService,
        _todoStorage_: todos.TodoStorage,
        _filterFilter_) => {
        ctrlCtor = $controller;
        scope = <todos.ITodoScope>$rootScope.$new();
        location = $location;
        todoStorage = _todoStorage_;
        filterFilter = _filterFilter_;
        })
    );

    it('should create itself', () => {

        todoCtrl = ctrlCtor(
            'todoCtrl', {
                $scope: scope,
                $location: location,
                todoStorage: todoStorage,
                filterFilter: filterFilter
            });

        expect(todoCtrl).to.be.not.null;
        expect(typeof scope.newTodo).to.equal('string');

    });

}); 
