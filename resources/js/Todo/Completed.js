import m from 'mithril'

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

export { CompletedComponent };
