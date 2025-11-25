import './bootstrap';
import m from 'mithril'

let root            = document.getElementById('app');
let containerStyles = 'container mx-auto';
let fontStyles      = 'font-bold';

let Item =
{
	items: [],

	loadItems: function()
	{
		return m.request({
			method: 'GET',
			url: 'http://localhost:3000/app/todos',
			withCredentials: true
		}).then((res) => {

			Item.items = res
		})
	},

	view: function()
	{
		return m('div', Item.items.map( function() {
			return m('div', {class: 'py-2 my-4' }, item.id + ': ' + item.name)
		}))
	}
}

let App =
{
	oninit: Item.loadItems,

	view: function()
	{
		return m('.app', Item)
	}
}

m.mount(root, App);
