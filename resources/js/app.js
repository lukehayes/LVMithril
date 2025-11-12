import './bootstrap';
import m from 'mithril'

let root = document.getElementById('app');


let app = {
    view: function()
    {
        return m("div", {class: 'container mx-auto'},[
            m("h1", "Application")
        ])
    }
}

m.mount(root, app);
