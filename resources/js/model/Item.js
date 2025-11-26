import m from 'mithril'

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
		return m('div', Item.items.map( function(item) {
			return m('div', {class: 'py-2 my-4' }, item.id + ': ' + item.name)
		}))
	}
}

export default Item;

