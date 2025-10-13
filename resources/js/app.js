import './bootstrap';
import m from 'mithril'

let root = document.getElementById('app');


let Item = {

    data: { list: [] },

    oninit: function(vnode)
    {
        console.dir("Pre Load");
        this.getData();
        console.dir("Post Load");
    },

    getData: function() {
        let data = this.data;
        m.request({
            method: "GET",
            url: "//localhost:3000/todos/",
            withCredentials: true,
        })
        .then(function(res) {
            Item.data.list = res;
        })
},

    view: function()
    {
        console.dir(Item);
        return Item.data.list.map(function(item) {
            return m('tr', {class: 'bg-zinc-100 border border-zinc-400' },[
                m('td', item.id),
                m('td', item.name),
                m('td', item.completed),

            ])
        })
    }
}


let app = {
    view: function()
    {
        return
        return m('table', [

            {class: 'w-full'}, [
            m(Item)
        ],
        ]);
    }
}

m.mount(root, app);
