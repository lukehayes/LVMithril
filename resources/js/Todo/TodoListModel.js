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

export default TodoListModel;
