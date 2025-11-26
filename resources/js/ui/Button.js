import m from 'mithril'

let Button = {

	view: function(vnode)
	{
		return m('div',
                {class: 'bg-zinc-100 py-2 px-4 hover:bg-zinc-800 hover:text-white rounded'},
                vnode.attrs.text
        )
	}
}

export default Button


