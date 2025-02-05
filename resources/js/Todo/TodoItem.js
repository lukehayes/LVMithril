import m from 'mithril'
import { CompletedComponent } from './Completed'

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

export default TodoItem;
