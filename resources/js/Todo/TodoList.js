import m from 'mithril'
import TodoListModel from './TodoListModel'
import TodoItem from './TodoItem'



let TodoList = {

    oninit: TodoListModel.getTodoItems,

    view: function()
    {
        return m('p', {class:''}, TodoListModel.items.map( function(t) {
            return m(TodoItem, {todo: t});
        }));
    }
}

export default TodoList;

