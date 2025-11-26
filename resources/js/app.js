import './bootstrap';
import m from 'mithril'
import Item from './model/Item'


let root = document.getElementById('app');

let App =
{
	styles: 'container mx-auto',
	oninit: Item.loadItems,

	view: function()
	{
		return m('.app', { class: this.styles },
		[
			m(Item),
		])
	}
}

m.mount(root, App);
