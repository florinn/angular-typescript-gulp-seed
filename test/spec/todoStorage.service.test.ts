/// <reference path='../setup.ts' /> 

describe('TodoStorage service', () => {

    var todoStorage: todos.ITodoStorage;

    beforeEach(module('todomvc'));

    beforeEach(inject((
        _todoStorage_: todos.TodoStorage) => {
        todoStorage = _todoStorage_;
    }));

    describe('get()', () => {

        it('should call localStorage', () => {

            var mock = GlobalMock.ofInstance(localStorage, "localStorage");
            mock.setup(x => x.getItem(It.isAnyString())).returns((key: string) => "[]").verifiable();

            GlobalScope.using(mock).with(() => {
                todoStorage.get();

                mock.verifyAll();
            });

        });

        it('should return an array of items', () => {

            var mock = GlobalMock.ofInstance(localStorage, "localStorage");
            mock.setup(x => x.getItem(It.isAnyString())).returns((key: string) => '[{"title":"todo1","completed":false},{"title":"todo2","completed":true},{"title":"todo5","completed":false}]');

            var expectedItems: todos.TodoItem[] = [];
            expectedItems.push(new todos.TodoItem('todo1', false));
            expectedItems.push(new todos.TodoItem('todo2', true));
            expectedItems.push(new todos.TodoItem('todo5', false));

            GlobalScope.using(mock).with(() => {
                var returnedItems = todoStorage.get();

                expect(returnedItems).eql(expectedItems);
            });

        });

    });

});