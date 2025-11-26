import './bootstrap';
import m from 'mithril'
import Item from './model/Item'

let root            = document.getElementById('app');
let containerStyles = 'container mx-auto';
let fontStyles      = 'font-bold';

let App =
{
	oninit: Item.loadItems,

	view: function()
	{
		return m(Item)
	}
}

m.mount(root, App);
