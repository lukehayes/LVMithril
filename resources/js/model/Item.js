import m from 'mithril'
import Options from '../ui/Options'
import Button from '../ui/Button'

let ItemText =
{
	view: function(vnode)
	{
		return m('div', { class: 'bg-zinc-100 my-2 p-4' }, vnode.attrs.text)
	}
}

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

		// return m(Options)
		//
		//
		// return(Options, { class: 'bg-zinc-300 p-3' }, [
		// 	m('div', {class: 'bg-rose-200 p-4'}, 'ABC' ),
		// 	m('div', {class: 'bg-emerald-200 p-4'},'DEF' ),
		// ])

		return m('div', Item.items.map( function(item) {

			return m(ItemText, {text: item.id + ': ' + item.name })

			// return m('div', {class: 'py-2 my-4' }, item.id + ': ' + item.name, [
			// 	m(Options, [
			// 		m(Button, {text: 'Option 1'}),
			// 	])
			// ])
		}))
	}
}

export default Item;

