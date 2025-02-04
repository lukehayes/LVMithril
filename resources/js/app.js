import './bootstrap';
import m from 'mithril'

let TodoListModel = {
    items: [],
    getTodoItems: function()
    {
        return m.request({
            method: "GET",
            url: 'http://localhost:3000/api/todos'
        })
        .then(function(result){
            TodoListModel.items = result;
        });
    }
}

let CompletedComponent = {
    view: function(vnode)
    {
        let completed = vnode.attrs.completed;

        if(completed)
        {
            return m('span', {class: 'px-4 py-2 bg-green-400 my-4 inline-block rounded-md'}, completed )
        }else {

            return m('span', {class: 'px-4 py-2 bg-red-400 my-4 inline-block rounded-md'}, completed )
        }
    }
}

let TodoItem = {
    view: function(vnode)
    {
        return m('p', {class:'m-4 p-4 bg-zinc-200'},  [
            m('p', vnode.attrs.todo.name),
            m('p', vnode.attrs.todo.description),
            m(CompletedComponent, {completed: vnode.attrs.todo.completed} ),
        ]);
    }
}

let TodoListView = {

    oninit: TodoListModel.getTodoItems,

    view: function()
    {
        return m('p', {class:''}, TodoListModel.items.map( function(t) {
            return m(TodoItem, {todo: t});
        }));
    }
}

m.mount(document.body, TodoListView);
