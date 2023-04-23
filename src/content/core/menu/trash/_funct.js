/**
 * Todo.
 *
 * @description Todo.
 */

import { TrashHtml } from './_html'

export class TrashFunct extends TrashHtml {

	_getLink( ) {

		let nav, links, res

		nav   = document.querySelector( 'nav' )
		links = nav.querySelectorAll( 'a' )
		res   = false

		links.forEach( link => {
		
			if ( 
				link.innerText.includes( 'Clear conversations' )
			) {

				res = link
		
			}

		} )

		return res

	}

	_setFunct( ) {

		let btn = document.getElementById( this.data.btnID )

		if ( !btn ) return

		btn.addEventListener( 'click', async () => {
	
			let navLink 

			navLink = 'button.p-1.hover\\:text-white:last-child'
			navLink = document.querySelector( navLink )
			
			if ( !navLink ) return

			await navLink.click()

			navLink = 'button.p-1.hover\\:text-white:first-child'
			navLink = document.querySelector( navLink )

			if ( navLink ) navLink.click()
		
		} )

	}

	init( ) {

		this.addHtml()

		this._setFunct( )

	}

}

