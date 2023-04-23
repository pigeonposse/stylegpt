/**
 * Todo.
 *
 * @description Todo.
 */

import { NewChatHtml } from './_html'

export class NewChatFunct extends NewChatHtml{

	_getLink() {

		let nav, links, res

		nav   = document.querySelector( 'nav' )
		links = nav.querySelectorAll( 'a' )
		res   = false

		if ( links[0] && links[0].innerText.includes( 'New chat' ) ) res = links[0]

		return res
	
	}

	_funct(){

		let btn 

		btn = document.getElementById( this.data.btnID )

		btn.addEventListener( 'click', () => {
		
			let navLink

			navLink = this._getLink( )

			if ( !navLink ) console.log( 'nav link [new chat] does not exist' )
			if ( !navLink ) return 
		
			navLink.click()
	
		} )

	}
	
	init() {

		this.addHtml()
		
		this._funct()
		// section( data, utils )
	
	}

}

